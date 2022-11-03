import { Formik } from 'formik';
import { SearchForm, Input, Submit } from './SearchBar.styled';

export const SearchBar = ({ handleSubmit }) => {
  const onSubmit = (values, actions) => {
    handleSubmit(values.quary);
    actions.resetForm();
  };
  const initialValues = {
    quary: '',
  };

  return (
    <>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <SearchForm>
          <Input
            name="quary"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search movie"
          />
          <Submit type="submit">Search</Submit>
        </SearchForm>
      </Formik>
    </>
  );
};
