export const blocks = {
  moodBlock: [
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: "Welcome. How are you doing?",
      },
      accessory: {
        action_id: "mood_selection",
        type: "static_select",
        placeholder: {
          type: "plain_text",
          text: "Select an item",
        },
        options: [
          {
            text: {
              type: "plain_text",
              text: "Doing Well",
            },
            value: "value-0",
          },
          {
            text: {
              type: "plain_text",
              text: "Neutral",
            },
            value: "value-1",
          },
          {
            text: {
              type: "plain_text",
              text: "Feeling Lucky",
            },
            value: "value-2",
          },
        ],
      },
    },
  ],
  hobbyBlock: [
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: "What are your favorite hobbies",
      },
      accessory: {
        action_id: "hobby_selection",
        type: "static_select",
        placeholder: {
          type: "plain_text",
          text: "Select an item",
        },
        options: [
          {
            text: {
              type: "plain_text",
              text: "Football",
            },
            value: "value-0",
          },
          {
            text: {
              type: "plain_text",
              text: "Music",
            },
            value: "value-1",
          },
          {
            text: {
              type: "plain_text",
              text: "Sleep",
            },
            value: "value-2",
          },
          {
            text: {
              type: "plain_text",
              text: "Movies",
            },
            value: "value-2",
          },
          {
            text: {
              type: "plain_text",
              text: "Basketball",
            },
            value: "value-2",
          },
        ],
      },
    },
  ],
};
