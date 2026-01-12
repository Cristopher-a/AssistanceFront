export type TeamType = 'FRC' | 'Aztech 1' | 'Aztech 2' | 'Aztech 3';

export interface Student {
    id: string;
    name: string;
    team: string;
    area: string;
    averageAttendance: number;
    totalHoursMonth: number;
    group?: number;
    level?: string;
    turn?: string;
    months?: any[];
    history?: any[];
}


export interface AttendanceRecord {
    id: string;
    studentId: string;
    date: string;
    checkIn: string;
    checkOut: string;
    hoursLogged: number;
    status: 'Presente' | 'Retardo' | 'Falta';
}

export interface MonthlyMetric {
    name: string;
    value: number;
    change?: number; // percentage change
}

export interface ChartDataPoint {
    name: string;
    value: number;
    value2?: number; // For comparison
}

export interface FileUploadStatus {
    id: string;
    fileName: string;
    status: 'uploading' | 'success' | 'error';
    progress: number;
    date: string;
}
