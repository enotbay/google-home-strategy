function createRoomLightGroupCard (roomGroup) {
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
function createLightCard (entity) {
  return (
    {
      "type": "custom:material-slider-card",
      "entity": entity.entity_id,
      "show_percentage": true,
      "bold_text": false,
      "control_type": "light"
    }
  );
}
