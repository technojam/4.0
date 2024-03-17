import * as Yup from 'yup';
export const Schema = Yup.object({
    firstName:Yup.string().min(2).max(25).required('Please Enter Your Valid Name'),
    lastName:Yup.string().min(2).max(25).required('Please Enter Your Valid Name'),
});