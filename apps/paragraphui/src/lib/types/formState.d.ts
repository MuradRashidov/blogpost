export type SignUpFormState =
  | {
     data?:{
        name?:string;
        email?:string;
        password?:string;
     };
      errors?: {
        name?: string[];
        email?: string[];
        password?: string[];
      };
      message?: string;
    }
  | undefined;

  export type SignInFormState =
  | {
     data?:{
        email?:string;
        password?:string;
     };
      errors?: {
        email?: string[];
        password?: string[];
      };
      message?: string;
    }
  | undefined;
