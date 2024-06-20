import type { Schema, Attribute } from '@strapi/strapi';

export interface FeedbackComments extends Schema.Component {
  collectionName: 'components_feedback_comments';
  info: {
    displayName: 'Comments';
    description: '';
  };
  attributes: {
    Content: Attribute.String;
    IsApproved: Attribute.Boolean;
    Author: Attribute.Relation<
      'feedback.comments',
      'oneToOne',
      'plugin::users-permissions.user'
    >;
    Thread_Of: Attribute.Integer;
    Total_Threads: Attribute.Integer;
  };
}

export interface FeedbackFeedback extends Schema.Component {
  collectionName: 'components_feedback_feedbacks';
  info: {
    displayName: 'Feedback';
    description: '';
  };
  attributes: {
    Comments: Attribute.Component<'feedback.comments', true>;
    Ratings: Attribute.Component<'feedback.ratings', true>;
    Reactions: Attribute.Component<'feedback.reaction', true>;
  };
}

export interface FeedbackRatings extends Schema.Component {
  collectionName: 'components_feedback_ratings';
  info: {
    displayName: 'Ratings';
    description: '';
  };
  attributes: {
    Rating: Attribute.Decimal;
    Author: Attribute.Relation<
      'feedback.ratings',
      'oneToOne',
      'plugin::users-permissions.user'
    >;
  };
}

export interface FeedbackReaction extends Schema.Component {
  collectionName: 'components_feedback_reactions';
  info: {
    displayName: 'Reaction';
    description: '';
  };
  attributes: {
    Reaction: Attribute.Enumeration<['Like', 'Support', 'Surprise']>;
    Author: Attribute.Relation<
      'feedback.reaction',
      'oneToOne',
      'plugin::users-permissions.user'
    >;
  };
}

export interface ForumsTopics extends Schema.Component {
  collectionName: 'components_forums_topics';
  info: {
    displayName: 'Topics';
    description: '';
  };
  attributes: {};
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
      'feedback.ratings': FeedbackRatings;
      'feedback.reaction': FeedbackReaction;
      'forums.topics': ForumsTopics;
      'quiz.options': QuizOptions;
      'quiz.questions': QuizQuestions;
    }
  }
}
