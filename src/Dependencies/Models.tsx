export interface PageResourceType
{
    Name: string,
    Link: string,
    Component: any   
}
export interface ProjectDisplayType
{
    projectName: string,
    projectDesc: string,
    projectTools: ProjectToolsType[],
    projectLesson: string,
}
export interface ProjectToolsType
{
    ToolName: string,
    ToolUse: string
}
export interface meDataType  
{
    Title: string,
    Desc: string | string[]
}
export interface meExprType  
{
    Title: string,
    Desc: string,
    Highlights: string[],
    DateStart: string,
    DateEnd: string
}
// IMPORT VARIABLES
export interface ProjectPropsType
{
    projectProps: ProjectDisplayType
};
export interface ExprCardPropsType
{
    Expr: meExprType
};