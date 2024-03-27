// Module options TypeScript interface definition
export type ModuleOptions = {
  defaultLocale: string
  locales?: LocaleOption[]
}

export type LocaleOption = {
  name: string
  file: string
}

export type Locale = LocaleOption & {
  path: string
}

export type Messages = {
  [key: string]: Messages
}
