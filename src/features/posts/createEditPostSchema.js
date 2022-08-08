import componentTypes from '@data-driven-forms/react-form-renderer/component-types';
import validatorTypes from '@data-driven-forms/react-form-renderer/validator-types';

const createEditPostSchema = (title, content) => ({
  fields: [
    {
      name: 'title',
      label: 'Post Title',
      component: componentTypes.TEXT_FIELD,
      initializeOnMount: true,
      initialValue: title,
      validate: [
        {
          type: validatorTypes.REQUIRED,
        },
      ],
    },
    {
      name: 'content',
      label: 'Post Content',
      component: componentTypes.TEXTAREA,
      initializeOnMount: true,
      initialValue: content,
      validate: [
        {
          type: validatorTypes.MIN_LENGTH,
          threshold: 10,
        }
      ]
    }
  ] 
});

export default createEditPostSchema;