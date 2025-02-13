interface usuario {
    nombre: string;
    edad: number;
    email: string;
    password: string;
    phone: number;
    language: string[];
};

const usuario0: usuario = {
    nombre: 'Alejandro',
    edad: 22,
    email: 'pipi',
    password: 'pipipassword',
    phone: 123456789,
    language: ['javascript', 'typescript', 'python'],
}