function showExercise(exerciseId, buttonId) {
    let allButtons = document.getElementsByTagName('button')
    for (let i = 0; i < allButtons.length; i++) {
        allButtons[i].style.backgroundColor = 'transparent'
    }

    let button = document.getElementById(buttonId)
    button.style.backgroundColor = 'rgba(0, 0, 255, 0.25)'


    let allExercises = document.getElementsByClassName('exercise_div');
    for (let n = 0; n < allExercises.length; n++) {
        allExercises[n].style.display = 'none';
    }

    let exercise = document.getElementById(exerciseId);
    exercise.style.display = 'block'
}

function tabuada() {
    let table_ex01 = document.getElementById('table_ex01')
    let number = document.getElementById('number_ex01').value
    let table = ''
    for (let i = 1; i <= 10; i++) {
        table += `${number} x ${i} = ${number * i}<br>`
    }
    table_ex01.innerHTML = table
}

function tabuada02() {
    let table_ex02 = document.getElementById('table_ex02')
    let number = document.getElementById('number_ex02').value
    let start = document.getElementById('start').value
    let end = document.getElementById('end').value
    let table = ''
    for (let i = start; i <= end; i++) {
        table += `${number} x ${i} = ${number * i}<br>`
    }
    table_ex02.innerHTML = table
}

function sequenceEx03() {
    let sequence_div = document.getElementById('sequence_div')
    let n = document.getElementById('n_fibonacci').value
    let list_fn = [1, 1]
    while (list_fn.length < n) {
        let add = list_fn[list_fn.length - 1] + list_fn[list_fn.length - 2]
        list_fn.push(add)
    }
    sequence_div.innerHTML = list_fn.join(', ')
}

function calcDadosCarro() {
    let result_div = document.getElementById('result_div')
    let car_value = document.getElementById('car_value').value
    let cash_price = car_value - car_value * 0.2
    let added_six = car_value * 1.03
    let added_twelve = car_value * 1.06
    let added_eighteen = car_value * 1.09
    result_div.innerHTML = `
    <h3 style="margin-top: 10px;">Valor à vista</h3>
    R$ ${cash_price.toFixed(2)}<br>
    <h3 style="margin-top: 10px;">Valor à prazo</h3>
    6x de R$ ${(added_six / 6).toFixed(2)} - Total de R$ ${added_six.toFixed(2)} <br>
    12x de R$ ${(added_twelve / 12).toFixed(2)} - Total de R$ ${added_twelve.toFixed(2)}<br>
    18x de R$ ${(added_eighteen / 18).toFixed(2)} - Total de R$ ${added_eighteen.toFixed(2)}<br>
    `
}

function findPrimes() {
    let limit = parseInt(document.getElementById('n_primes').value)
    let primes_div = document.getElementById('primes_div')
    let primes = [1]
    for (let j = 2; primes.length < limit; j++) {
        let is_prime = true
        let k = 2
        while (k < j) {
            if (j % k == 0) {
                is_prime = false
                break
            }
            k++
        }
        if (is_prime) {
            primes.push(j)
        }
    }
    primes_div.innerHTML = primes.join(', ')
}

function sortear() {
    let max_number = document.getElementById('max_number').value
    let number_div = document.getElementById('number_div')  
    number_div.innerHTML = Math.floor(Math.random() * (max_number) + 1)
}

function calculate() {
    let capital = parseFloat(document.getElementById('capital').value)
    let monthly_value = parseFloat(document.getElementById('monthly_value').value)
    let interest_rate = parseFloat(document.getElementById('interest_rate').value)
    let time = parseFloat(document.getElementById('time').value)

    let monthly_yearly_rate = document.getElementById('monthly_yearly_rate') // select
    let month_year_time = document.getElementById('month_year_time') //select

    let final_value_div = document.getElementById('final_value_div')
    let invested_value_div = document.getElementById('invested_value_div')
    let total_interest_div = document.getElementById('total_interest_div')

    let final_value = capital
    if (month_year_time.value == 'month_time') {
        if (monthly_yearly_rate.value == 'monthly') {
            for (let month = 1; month <= time; month++) { // para cada mês...
                let m = final_value * (1 + (interest_rate / 100))
                final_value = m += monthly_value
                capital += monthly_value
            }
        } else if (monthly_yearly_rate.value == 'yearly') {
                for (let month = 1; month <= time; month++) { // para cada mês...
                    let m = final_value * (1 + (interest_rate / 12) / 100)
                    final_value = m += monthly_value
                    capital += monthly_value
                }
            }
    } else if (month_year_time.value == 'year_time') {
        if (monthly_yearly_rate.value == 'yearly') {
            for (let month = 1; month <= (time * 12); month++) { // para cada mês...
                let m = final_value * (1 + ((interest_rate / 12) / 100))
                final_value = m += monthly_value
                capital += monthly_value
            }
        } else if (monthly_yearly_rate.value == 'monthly') {
                for (let month = 1; month <= (time * 12); month++) { // para cada mês...
                    let m = final_value * (1 + (interest_rate / 100))
                    final_value = m += monthly_value
                    capital += monthly_value
                }
            }
        
    } 

    
    let total_interest = final_value - capital
    
    invested_value_div.innerHTML = 'R$ ' + capital.toFixed(2).replace('.', ',')
    total_interest_div.innerHTML = 'R$ ' + total_interest.toFixed(2).replace('.', ',')
    final_value_div.innerHTML = 'R$ '+ final_value.toFixed(2).replace('.', ',')
}