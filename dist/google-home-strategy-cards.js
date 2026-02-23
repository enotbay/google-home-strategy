export function createRoomLightGroupCard (roomGroup) {
  return (
    {
      "type": "custom:expander-card",
      "title-card": {
          "type": "custom:material-slider-card",
          "entity": roomGroup.entity_id,
          "icon": "m3of:lightbulb",
          "show_percentage": true,
          "bold_text": false,
          "control_type": "light"
      },
      "clear-children": true,
      "title-card-button-overlay": true,
      "title-card-clickable": false,
      "child-margin-top": ".6em",
      "clear": true,
      "button-background": "black",
      "padding": "0",
      "overlay-margin": "20px",
      "cards": [
        {
          "type": "custom:auto-entities",
          "card": {
            "square": false,
            "type": "grid",
            "columns": 2
          },
          "card_param": "cards",
          "filter": {
            "include": [
              {
                "group": {
                  "group": roomGroup.entity_id,
                  "active_choice": "group"
                },
                "options": {
                  "type": "custom:material-slider-card",
                  "show_percentage": true,
                  "bold_text": false,
                  "control_type": "light",
                  "show_percentage": true,
                }
              }
            ],
            "exclude": []
          },
          "show_empty": false,
          "sort": {
            "method": "entity_id"
          }
        }
      ]
    }
  );
}
export function createLightCard (entity) {
  return (
    {
      type: "custom:material-slider-card",
      entity: entity.entity_id,
      show_percentage: true,
      bold_text: false,
      control_type: "light"
    }
  );
}
export function createCoverCard (entity) {
  return (
    {
      type: "custom:material-slider-card",
      entity: entity.entity_id,
      show_percentage: true,
      bold_text: false,
      control_type: "cover"
    }
  );
}
export function createClimateCard (entity) {
  return (
    {
      type: "custom:material-climate-card",
      entity: entity.entity_id,
      increase_temp: 1,
      decrease_temp: 1,
      use_material_color: true,
      use_default_icon: true,
      fix_temperature: false,
    }
  );
}
export function createCameraCard (entity, entity_name) {
  return (
    {
      type: "custom:webrtc-camera",
      entity: entity.entity_id,
      title: entity_name,
    }
  );
}
export function createMediaCard (entity) {
  return (
    {
      type: "custom:material-button-card",
      use_default_icon: true,
      use_default_toggle: true,
      use_default_text: true,
      entity: entity.entity_id,
      icon: "mdi:switch",
      height: 97,
      control_type: "media_player"
    }
  );
}