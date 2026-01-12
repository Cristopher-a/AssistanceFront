import type { Student, AttendanceRecord, ChartDataPoint, FileUploadStatus } from '../types';

export const TEAMS = ['FRC', 'Aztech 1', 'Aztech 2', 'Aztech 3'] as const;
export const AREAS = ['Logística', 'Electrónica', 'Mecánica', 'Impacto Social', 'Desarrollo de Software',
     "Programación", "Media y diseño"];

// Helper to get random item
const getRandom = <T,>(arr: readonly T[]): T => arr[Math.floor(Math.random() * arr.length)];

// Generate Students
export const generateStudents = (count: number): Student[] => {
    return Array.from({ length: count }).map((_, i) => ({
        id: `student-${i + 1}`,
        name: `Alumno ${i + 1} ${getRandom(['Pérez', 'García', 'López', 'Rodríguez', 'Martínez'])}`,
        team: getRandom(TEAMS),
        area: getRandom(AREAS),
        averageAttendance: Math.floor(Math.random() * (100 - 60) + 60), // 60 to 100
        totalHoursMonth: Math.floor(Math.random() * (160 - 80) + 80),
    }));
};

// Generate History for a student
export const generateAttendanceHistory = (studentId: string, days: number): AttendanceRecord[] => {
    return Array.from({ length: days }).map((_, i) => {
        const hours = Math.floor(Math.random() * 4 + 4); // 4 to 8 hours
        const isLate = Math.random() > 0.8;
        return {
            id: `att-${studentId}-${i}`,
            studentId,
            date: new Date(2023, 9, i + 1).toISOString().split('T')[0],
            checkIn: isLate ? '09:15' : '08:55',
            checkOut: '17:00',
            hoursLogged: hours,
            status: isLate ? 'Retardo' : 'Presente',
        };
    });
};

// --- CHART DATA FOR FILTERS (DASHBOARD) ---

// 1. Este Mes (Semanal)
export const currentMonthData: ChartDataPoint[] = [
    { name: 'Sem 1', value: 88 },
    { name: 'Sem 2', value: 92 },
    { name: 'Sem 3', value: 85 },
    { name: 'Sem 4', value: 94 },
];

// 2. Últimos 3 Meses (Comparativa vs Año anterior o Meta)
export const last3MonthsData: ChartDataPoint[] = [
    { name: 'Agosto', value: 85, value2: 82 },
    { name: 'Septiembre', value: 88, value2: 85 },
    { name: 'Octubre', value: 92, value2: 89 },
];

// 3. Anual (Mensual)
export const annualData: ChartDataPoint[] = [
    { name: 'Ene', value: 75 },
    { name: 'Feb', value: 78 },
    { name: 'Mar', value: 82 },
    { name: 'Abr', value: 80 },
    { name: 'May', value: 85 },
    { name: 'Jun', value: 88 },
    { name: 'Jul', value: 82 },
    { name: 'Ago', value: 85 },
    { name: 'Sep', value: 88 },
    { name: 'Oct', value: 92 },
    { name: 'Nov', value: 89 },
    { name: 'Dic', value: 91 },
];

// --- CHART DATA FOR STUDENT DETAIL ---

export const studentQuarterData: ChartDataPoint[] = [
    { name: 'Ago', value: 88 },
    { name: 'Sep', value: 94 },
    { name: 'Oct', value: 85 },
];

export const studentAnnualData: ChartDataPoint[] = [
    { name: 'Ene', value: 95 },
    { name: 'Feb', value: 92 },
    { name: 'Mar', value: 88 },
    { name: 'Abr', value: 90 },
    { name: 'May', value: 85 },
    { name: 'Jun', value: 94 },
    { name: 'Jul', value: 96 },
    { name: 'Ago', value: 88 },
    { name: 'Sep', value: 92 },
    { name: 'Oct', value: 85 },
    { name: 'Nov', value: 0 },
    { name: 'Dic', value: 0 },
];

export const mockFiles: FileUploadStatus[] = [
    { id: '1', fileName: 'Asistencia_Octubre_2023.xlsx', status: 'success', progress: 100, date: '2023-10-31' },
    { id: '2', fileName: 'Asistencia_Septiembre_2023.xlsx', status: 'success', progress: 100, date: '2023-09-30' },
    { id: '3', fileName: 'Asistencia_Agosto_ERR.xlsx', status: 'error', progress: 100, date: '2023-08-31' },
];

export const mockStudents = generateStudents(30);