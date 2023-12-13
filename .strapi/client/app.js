/**
 * This file was automatically generated by Strapi.
 * Any modifications made will be discarded.
 */
import recordLocking from "@notum-cz/strapi-plugin-record-locking/strapi-admin";
import dragDropContentTypes from "@retikolo/drag-drop-content-types/strapi-admin";
import strapiCloud from "@strapi/plugin-cloud/strapi-admin";
import i18N from "@strapi/plugin-i18n/strapi-admin";
import usersPermissions from "@strapi/plugin-users-permissions/strapi-admin";
import publisher from "strapi-plugin-publisher/strapi-admin";
import { renderAdmin } from "@strapi/strapi/admin";

renderAdmin(document.getElementById("strapi"), {
  plugins: {
    "record-locking": recordLocking,
    "drag-drop-content-types": dragDropContentTypes,
    "strapi-cloud": strapiCloud,
    i18n: i18N,
    "users-permissions": usersPermissions,
    publisher: publisher,
  },
});
