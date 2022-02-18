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
            value: "Doing Well",
          },
          {
            text: {
              type: "plain_text",
              text: "Neutral",
            },
            value: "Neutral",
          },
          {
            text: {
              type: "plain_text",
              text: "Feeling Lucky",
            },
            value: "Feeling Lucky",
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
            value: "Football",
          },
          {
            text: {
              type: "plain_text",
              text: "Music",
            },
            value: "Music",
          },
          {
            text: {
              type: "plain_text",
              text: "Sleep",
            },
            value: "Sleep",
          },
          {
            text: {
              type: "plain_text",
              text: "Movies",
            },
            value: "Movies",
          },
          {
            text: {
              type: "plain_text",
              text: "Basketball",
            },
            value: "Basketball",
          },
        ],
      },
    },
  ],
};
