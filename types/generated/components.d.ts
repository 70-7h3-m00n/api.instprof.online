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

export interface CoursesComponentItemList extends Schema.Component {
  collectionName: 'components_courses_component_item_lists';
  info: {
    displayName: 'itemList';
  };
  attributes: {
    description: Attribute.Text & Attribute.Required;
    header: Attribute.String & Attribute.Required;
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
        maxLength: 72;
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

export interface CoursesComponentListVacancies extends Schema.Component {
  collectionName: 'components_list_vacancies_list_vacancies';
  info: {
    displayName: 'listVacancies';
    description: '';
  };
  attributes: {
    header: Attribute.String & Attribute.Required;
    description: Attribute.String & Attribute.Required;
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

export interface CoursesComponentVacanciesProfession extends Schema.Component {
  collectionName: 'components_vacancies_profession_vacancies_professions';
  info: {
    displayName: 'Vacancies';
    description: '';
  };
  attributes: {
    header: Attribute.String & Attribute.Required;
    description: Attribute.String & Attribute.Required;
  };
}

export interface CoursesComponentWhoIsProgram extends Schema.Component {
  collectionName: 'components_who_is_program_who_is_programs';
  info: {
    displayName: 'whoIsProgram';
  };
  attributes: {
    icon: Attribute.Media & Attribute.Required;
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
  };
}

export interface ItemsHeaders extends Schema.Component {
  collectionName: 'components_items_headers';
  info: {
    displayName: 'Headers';
  };
  attributes: {
    header: Attribute.String & Attribute.Required;
    description: Attribute.String & Attribute.Required;
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

export interface ItemsListImage extends Schema.Component {
  collectionName: 'components_items_list_images';
  info: {
    displayName: 'ListImage';
  };
  attributes: {
    image: Attribute.Media & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'courses-component.description-program': CoursesComponentDescriptionProgram;
      'courses-component.item-list': CoursesComponentItemList;
      'courses-component.list-header': CoursesComponentListHeader;
      'courses-component.list-study-pro': CoursesComponentListStudyPro;
      'courses-component.list-study': CoursesComponentListStudy;
      'courses-component.list-teachers': CoursesComponentListTeachers;
      'courses-component.list-training-info': CoursesComponentListTrainingInfo;
      'courses-component.list-vacancies': CoursesComponentListVacancies;
      'courses-component.list': CoursesComponentList;
      'courses-component.training-program': CoursesComponentTrainingProgram;
      'courses-component.vacancies-profession': CoursesComponentVacanciesProfession;
      'courses-component.who-is-program': CoursesComponentWhoIsProgram;
      'items.headers': ItemsHeaders;
      'items.item-header': ItemsItemHeader;
      'items.list-image': ItemsListImage;
    }
  }
}
