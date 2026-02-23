export const defaultConfig = {
  views: {
    devices: {
      title: 'Devices',
      path: 'devices',
      icon: 'm3r:devices-other',
      type: 'sections',
      max_columns: 5,
      header: {
        card: {
          type: 'markdown',
          content: `# Devices`,
          text_only: true,
        },
        layout: 'responsive',
        badges_position: 'bottom',
        badges_wrap: 'wrap',
      },
      theme: 'Material You',
      sections: {
        navigation: {
          type: 'grid',
          column_span: 1,
        },
        areas: {
          type: 'grid',
          column_span: 2,
        },
      }
    },
    cameras: {
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
      sections: {
        camera_cards: {
          type: "grid",
          column_span: 5,
        }
      }
    }
  },
};
