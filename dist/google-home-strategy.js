const hacstag = new URL(import.meta.url).searchParams.get('hacstag');
const { defaultConfig } = await import(
  `./google-home-strategy-config.js?hacstag=${hacstag}`
);
const { createRoomLightGroupCard , createLightCard, createCoverCard, createCameraCard,createMediaCard } =
  await import(`./google-home-strategy-cards.js?hacstag=${hacstag}`);

class GoogleHomeDashboard {
  static async generate(userConfig, hass) {
    // Query all data we need. We will make it available to views by storing it in strategy options.
    const [areas, devices, entities] = await Promise.all([
      hass.callWS({ type: "config/area_registry/list" }),
      hass.callWS({ type: "config/device_registry/list" }),
      hass.callWS({ type: "config/entity_registry/list" }),
    ]);
    try {
      const views = [];
      const config = mergeDeep(defaultConfig, userConfig);
    }
    const navCards = [];
    const areaCards = [];
    const cameraCards = [];
    const dashboard_path = window.location.pathname;
    for (const area of areas) {
      const areaDevices = new Set();
      for (const device of devices){
        if (device.area_id === area.area_id) {
          areaDevices.add(device.id);
        }
      }
      if (areaDevices.size > 0){ 
        const area_url = dashboard_path + "?anchor=" + area.area_id
        navCards.push({
          type: "heading",
          icon: "m3o:door-open",
          heading: area.name,
          heading_style: "title",
          tap_action: {
            action: "navigate",
            navigation_path : area_url,
            navigation_replace: true,
          },
        });
        areaCards.push(          
          {
            type: "custom:anchor-card",
            anchor_id: area.area_id,
            transition: 0,
            negative_margin: 13,
            timeout: 50,
            offset: 0, 
            transition: 0,
          },
          {
            type: "heading",
            icon: "",
            heading_style: "title",
            heading: area.name
          },
        )
      }
      for (const entity of entities){
        if (entity.area_id ? entity.area_id === area.area_id : areaDevices.has(entity.device_id)) {
          const domain = entity.entity_id.split(".")[0];
          switch(domain) {
            case 'light':
              if (!(entity.entity_id.includes("segment"))){
                console.log(entity);
                areaCards.push(cards.createLightCard(entity));
              }
            break;
            case 'cover':
              areaCards.push(cards.createCoverCard(entity));
            break;
            case 'climate':
              areaCards.push(cards.createClimateCard(entity));
            break;
            case 'camera':
              const camera_name = hass.states[entity.entity_id].attributes.friendly_name;
              const camera_card = {
                type: "custom:webrtc-camera",
                entity: entity.entity_id,
                title: camera_name,
              }
              cameraCards.push(camera_card);
              areaCards.push(camera_card);
            break;
            case 'media_player':
              areaCards.push(cards.createMediaCard(entity));
            break;
            default:
            break;
          }
        }
      }
    }
    return {
      views: [
        {
          title: "Devices",
          path: "devices",
          icon: "m3r:devices-other",
          type: "sections",
          max_columns: 5,
          header: {
            card: {
              type: "markdown",
              content: `# Devices`,
              text_only: true,
            },
            layout: "responsive",
            badges_position: "bottom",
            badges_wrap: "wrap",
          },
          theme: "Material You",
          sections: [
            {
              type: "grid",
              column_span: 1,
              cards: navCards,
            },
            {
              type: "grid",
              column_span: 2,
              cards: areaCards,
            },
          ]
        },
        {
          title: "Cameras",
          path: "camers",
          icon: "m3r:devices-other",
          type: "sections",
          max_columns: 5,
          header: {
            card: {
              type: "markdown",
              content: `# Cameras`,
              text_only: true,
            },
            layout: "responsive",
            badges_position: "bottom",
            badges_wrap: "wrap",
          },
          theme: "Material You",
          sections: [
            {
              type: "grid",
              column_span: 5,
              cards: cameraCards,
            }
          ]
        }
      ]
    };

  }
}

customElements.define("ll-strategy-dashboard-google-home", GoogleHomeDashboard);
