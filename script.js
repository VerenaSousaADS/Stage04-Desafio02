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



function printStudentAverage(student) {
   
    return (alert(`A média do(a) aluno(a) ${student.name} é: ${average(student.firtsTest, student.secondTest)}`))
}


for (const student of students) {
    let averageMessage = printStudentAverage(student)
    alert(averageMessage)
   
    if (average >= 7) {
        alert(`Parabéns ${student.name}! Você foi aprovado(a) no concurso!`)
    }else{
        alert(`Não foi  dessa vez ${student.name}. Tente novamente!`)
    }  
}



  console.log(average())