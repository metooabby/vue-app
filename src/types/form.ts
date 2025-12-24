export type FieldType = "text" | "email" | "password";

export type Formfield = {
    name:string,
    label:string,
    type:FieldType,
    required?:boolean
}

export type FormSchema = Formfield[];

