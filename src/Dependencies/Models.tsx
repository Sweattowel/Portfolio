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