
// Page Resources

export type PageResourceType =
{
    Title: string,
    component: () => React.JSX.Element,
    Path: string
    Desc: string

};

// Creator Resources

export type ExperienceType = 
{
    Title: string,
    Desc: string,
    Highlights: string[],
    DateStart: string,
    DateEnd: string

};

export type AboutMeDataType =
{
    Title: string,
    Desc: string

};

export type ProjectType =
{
    Title: string,
    Desc: string,
    Tech: string[]
    Path: string
    // Expanded Form
    DocumentOverview: string,
    DocumentConsiderations: string[],
    DocumentChallenges: string[],
    DocumentThoughtProcess: string[],
    DocumentProjectLink: string,
};

// Page Variable imports

export type ErrorCodeType =
{
    ErrorCode: number
    ErrorMessage: string
};