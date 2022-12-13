//Lista de alunos

const students = [
    {
        name: "Alex",
        firtsTest: 8,
        secondTest: 7,
    },
    {
        name: "Bruna",
        firtsTest: 5,
        secondTest: 9,
    },
    {
        name: "Carlos",
        firtsTest: 3,
        secondTest: 6,
    },
    {
        name: "Lucas",
        firtsTest: 10,
        secondTest: 8,
    },
    {
        name: "Paula",
        firtsTest: 7,
        secondTest: 8,
    },
]

function average(firtsTest, secondTest) {
    return (((firtsTest + secondTest) / 2)).toFixed(2)    
}



for (const student of students) {

    if (average(student.firtsTest, student.secondTest)>=7) {
        alert(`A média do(a) aluno(a) ${student.name} é: ${average(student.firtsTest, student.secondTest)}\n Parabéns ${student.name}! Você foi aprovado(a) no concurso!`)
    }else{
        alert(`A média do(a) aluno(a) ${student.name} é: ${average(student.firtsTest, student.secondTest)}\n Não foi  dessa vez ${student.name}. Tente novamente!`)
    }  
}

