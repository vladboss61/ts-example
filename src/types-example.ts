type MyPartial<T> = {
    [P in keyof T]?: T[P];
};

type MyRequired<T> = {
    [P in keyof T]-?: T[P];
};

type MyReadonly<T> = {
    readonly [P in keyof T]: T[P];
};

type MyPick<T, K extends keyof T> = {
    [P in K]: T[P];
};

type MyRecord<K extends keyof any, T> = {
    [P in K]: T;
};

type PermissionsTest = {
   closeDoor: boolean;
   openDoor: boolean;
   replaceMaxWidth: boolean;
   changeSize: boolean;
}
  
type SpecificPermissionsEx1 = {
  [Key in keyof PermissionsTest as `Prefix_${Key}`]: boolean;
}

type SpecificPermissionsEx2 = {
  [Key in keyof PermissionsTest as `Prefix_${Capitalize<Key>}`]: boolean;
}

type AvailablePrefValues = 'read' | 'write';

type SpecificPermissionsEx3 = {
  [Key in keyof PermissionsTest as `${AvailablePrefValues}_${Key}`]: boolean;
}

type SpecificPermissionsEx4 = {
    [Key in keyof PermissionsTest as `${AvailablePrefValues}_${Uppercase<Key>}`]: boolean;
}

type SpecificPermissionsEx5 = {
    [Key in keyof PermissionsTest as `${AvailablePrefValues}_${Lowercase<Key>}`]: boolean;
}