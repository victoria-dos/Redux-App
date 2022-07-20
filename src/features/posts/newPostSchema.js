import componentTypes from '@data-driven-forms/react-form-renderer/component-types';
import validatorTypes from '@data-driven-forms/react-form-renderer/validator-types';

const newPostSchema = ({ users }) => {
    return (
        {
            title: 'Add a new Post!',
            description: 'You can add a post using this simple form: ',
            fields: [
              {
                name: 'post-title',
                label: 'Post Title',
                component: componentTypes.TEXT_FIELD,
                validate: [
                  {
                    type: validatorTypes.REQUIRED,
                  },
                ],
              },
              {
                name: 'author',
                label: 'Autor',
                component: componentTypes.SELECT,
                options: users?.map((user) => ({ value: user.id, label: user.name})),
                validate: [
                  {
                    type: validatorTypes.REQUIRED,
                  },
                ]
              },
              {
                name: 'post-content',
                label: 'Post Content',
                component: componentTypes.TEXTAREA,
                validate: [
                  {
                    type: validatorTypes.MIN_LENGTH,
                    threshold: 10,
                  }
                ]
              }
            ] 
          }
    )
}

export default newPostSchema;