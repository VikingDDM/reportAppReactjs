export interface Report {
    name: string;
    content: string;
    createdAt: string;
    updatedAt: string;
}



export interface ReportState {
  report: any;
  loading: boolean;
}

export interface ReportResult {
    report: Report;
}