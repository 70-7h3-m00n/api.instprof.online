import type { Schema, Attribute } from '@strapi/strapi';

export interface CoursesComponentDescriptionProgram extends Schema.Component {
  collectionName: 'components_description_program_description_programs';
  info: {
    displayName: 'descriptionProgram';
  };
  attributes: {
    header: Attribute.String & Attribute.Required;
    subHeader: Attribute.Text & Attribute.Required;
    tittle: Attribute.Text & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    image: Attribute.Media & Attribute.Required;
  };
}

export interface CoursesComponentListHeader extends Schema.Component {
  collectionName: 'components_list_header_list_headers';
  info: {
    displayName: 'listHeader';
    description: '';
  };
  attributes: {
    item: Attribute.Text &
      Attribute.SetMinMaxLength<{
        maxLength: 110;
      }>;
  };
}

export interface CoursesComponentListStudyPro extends Schema.Component {
  collectionName: 'components_courses_component_list_study_pros';
  info: {
    displayName: 'listStudyPro';
    description: '';
  };
  attributes: {
    title: Attribute.Text &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 135;
      }>;
  };
}

export interface CoursesComponentListStudy extends Schema.Component {
  collectionName: 'components_who_is_program_list_studies';
  info: {
    displayName: 'listStudy';
    description: '';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 72;
      }>;
    description: Attribute.Text &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 110;
      }>;
  };
}

export interface CoursesComponentListTeachers extends Schema.Component {
  collectionName: 'components_courses_component_list_teachers';
  info: {
    displayName: 'listTeachers';
  };
  attributes: {
    image: Attribute.Media & Attribute.Required;
    title: Attribute.Text & Attribute.Required;
    subTitle: Attribute.Text & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
  };
}

export interface CoursesComponentListTrainingInfo extends Schema.Component {
  collectionName: 'components_list_training_info_list_training_infos';
  info: {
    displayName: 'listTrainingInfo';
  };
  attributes: {
    trainingPeriod: Attribute.String & Attribute.Required;
    formOfStudy: Attribute.String & Attribute.Required;
    nextEnrollment: Attribute.String & Attribute.Required;
    numberHours: Attribute.String & Attribute.Required;
    certificateCompletion: Attribute.String & Attribute.Required;
  };
}

export interface CoursesComponentList extends Schema.Component {
  collectionName: 'components_courses_component_lists';
  info: {
    displayName: 'list';
    description: '';
  };
  attributes: {
    item: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 110;
      }>;
  };
}

export interface CoursesComponentTrainingProgram extends Schema.Component {
  collectionName: 'components_courses_component_training_programs';
  info: {
    displayName: 'trainingProgram';
    description: '';
  };
  attributes: {
    pro: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<false>;
    title: Attribute.Text &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 110;
      }>;
    list: Attribute.Component<'courses-component.list', true>;
  };
}

export interface CoursesComponentWhoIsProgram extends Schema.Component {
  collectionName: 'components_who_is_program_who_is_programs';
  info: {
    displayName: 'whoIsProgram';
    description: '';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    image: Attribute.Media & Attribute.Required;
  };
}

export interface ItemsFaq extends Schema.Component {
  collectionName: 'components_items_faqs';
  info: {
    displayName: 'Faq';
  };
  attributes: {
    question: Attribute.String & Attribute.Required;
    answer: Attribute.Text & Attribute.Required;
  };
}

export interface ItemsHeaders extends Schema.Component {
  collectionName: 'components_items_headers';
  info: {
    displayName: 'Headers';
    description: '';
  };
  attributes: {
    header: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
  };
}

export interface ItemsItemHeader extends Schema.Component {
  collectionName: 'components_items_item_headers';
  info: {
    displayName: 'ItemHeader';
    description: '';
  };
  attributes: {
    header: Attribute.String & Attribute.Required;
    description: Attribute.String & Attribute.Required;
    listVacancies: Attribute.Component<'items.headers', true>;
    listSalary: Attribute.Component<'items.headers', true>;
  };
}

export interface ItemsLearningProfessions extends Schema.Component {
  collectionName: 'components_items_learning_professions';
  info: {
    displayName: 'LearningProfessions';
    description: '';
  };
  attributes: {
    header: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 66;
      }>;
    description: Attribute.Text &
      Attribute.SetMinMaxLength<{
        maxLength: 136;
      }>;
    image: Attribute.Media;
  };
}

export interface ItemsListImage extends Schema.Component {
  collectionName: 'components_items_list_images';
  info: {
    displayName: 'ListImage';
  };
  attributes: {
    image: Attribute.Media & Attribute.Required;
  };
}

export interface ItemsStudentComment extends Schema.Component {
  collectionName: 'components_items_student_comments';
  info: {
    displayName: 'StudentComment';
    description: '';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    image: Attribute.Media & Attribute.Required;
    data: Attribute.String & Attribute.Required;
  };
}

export interface ProgramCourseCourseProgram extends Schema.Component {
  collectionName: 'components_program_course_course_programs';
  info: {
    displayName: 'CourseProgram';
    description: '';
  };
  attributes: {
    numberLessons: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 12;
      }>;
    titleModule: Attribute.String;
    listThemes: Attribute.Component<'courses-component.list', true>;
  };
}

export interface ProgramCoursePaymentTerms extends Schema.Component {
  collectionName: 'components_program_course_payment_terms';
  info: {
    displayName: 'PaymentTerms';
    description: '';
  };
  attributes: {
    cost: Attribute.String;
    list: Attribute.Component<'courses-component.list', true> &
      Attribute.Required;
    discount: Attribute.String & Attribute.Required;
  };
}

export interface ProgramCoursePortfolio extends Schema.Component {
  collectionName: 'components_program_course_portfolios';
  info: {
    displayName: 'Portfolio';
    description: '';
  };
  attributes: {
    image: Attribute.Media & Attribute.Required;
    profession: Attribute.String & Attribute.Required;
    cost: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    skills: Attribute.Component<'courses-component.list', true> &
      Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'courses-component.description-program': CoursesComponentDescriptionProgram;
      'courses-component.list-header': CoursesComponentListHeader;
      'courses-component.list-study-pro': CoursesComponentListStudyPro;
      'courses-component.list-study': CoursesComponentListStudy;
      'courses-component.list-teachers': CoursesComponentListTeachers;
      'courses-component.list-training-info': CoursesComponentListTrainingInfo;
      'courses-component.list': CoursesComponentList;
      'courses-component.training-program': CoursesComponentTrainingProgram;
      'courses-component.who-is-program': CoursesComponentWhoIsProgram;
      'items.faq': ItemsFaq;
      'items.headers': ItemsHeaders;
      'items.item-header': ItemsItemHeader;
      'items.learning-professions': ItemsLearningProfessions;
      'items.list-image': ItemsListImage;
      'items.student-comment': ItemsStudentComment;
      'program-course.course-program': ProgramCourseCourseProgram;
      'program-course.payment-terms': ProgramCoursePaymentTerms;
      'program-course.portfolio': ProgramCoursePortfolio;
    }
  }
}
