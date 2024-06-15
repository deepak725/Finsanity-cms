import type { Schema, Attribute } from '@strapi/strapi';

export interface FeedbackComments extends Schema.Component {
  collectionName: 'components_feedback_comments';
  info: {
    displayName: 'Comments';
  };
  attributes: {
    Comment: Attribute.String;
    Comment_ID: Attribute.Integer;
  };
}

export interface FeedbackFeedback extends Schema.Component {
  collectionName: 'components_feedback_feedbacks';
  info: {
    displayName: 'Feedback';
  };
  attributes: {
    Ratings: Attribute.Integer;
    Liked: Attribute.Boolean;
    Comments: Attribute.Component<'feedback.comments', true>;
  };
}

export interface QuizOptions extends Schema.Component {
  collectionName: 'components_quiz_options';
  info: {
    displayName: 'Options';
  };
  attributes: {
    Option: Attribute.String;
  };
}

export interface QuizQuestions extends Schema.Component {
  collectionName: 'components_quiz_questions';
  info: {
    displayName: 'Questions';
  };
  attributes: {
    Options: Attribute.Component<'quiz.options', true>;
    Title: Attribute.String;
    Answer: Attribute.Integer;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'feedback.comments': FeedbackComments;
      'feedback.feedback': FeedbackFeedback;
      'quiz.options': QuizOptions;
      'quiz.questions': QuizQuestions;
    }
  }
}
