/* Your Code Here */
function createEmployeeRecord(data){
    let record = {
        firstName: data[0],
        familyName:data[1],
        title: data[2],
        payPerHour: data[3],
        timeInEvents: [],
        timeOutEvents: []
    }
    

    return record
}

function createEmployeeRecords(arrays){
    return arrays.map(createEmployeeRecord)
}

function createTimeInEvent(date){
    let timeInEvent = {
        'type': 'TimeIn',
        'hour': parseInt(date.slice(10)),
        'date': date.slice(0,10)
    }
    this.timeInEvents.push(timeInEvent)
    
    return this

}

function createTimeOutEvent(date){
    let timeOutEvent = {
        'type': 'TimeOut',
        'hour': parseInt(date.slice(10)),
        'date': date.slice(0,10)
    }
    this.timeOutEvents.push(timeOutEvent)
   
    
    return this

}

function hoursWorkedOnDate(date){
    
    let start = 0
    let end = 0
    for (let i = 0; i< this.timeInEvents.length; i++){

        if (this.timeInEvents[i]['date'] === date){
             start = this.timeInEvents[i]['hour']
        }
       
    }

    for (let i = 0; i< this.timeOutEvents.length; i++){

        if (this.timeOutEvents[i]['date'] === date){
            end = this.timeOutEvents[i]['hour']
        }
    }
    console.log('start time ', start)
    console.log('end time ', end)
    console.log('total hours' , (end-start)/100)
    return (end-start)/100
}

function wagesEarnedOnDate(date){
    
    console.log('earned ', hoursWorkedOnDate.call(this,date) * this.payPerHour)
    return hoursWorkedOnDate.call(this,date) * this.payPerHour
}

function findEmployeeByFirstName(srcArray, firstName){
    for (let i = 0; i<srcArray.length; i++){
        if (srcArray[i].firstName = firstName){
            return srcArray[i]
        }
        
    }
    return undefined
}

function calculatePayroll(records){
    let payroll = 0
    for (let i = 0; i<records.length; i++){
        payroll+= allWagesFor.call(records[i])
        console.log(`current payroll: `, payroll)
    }

  return payroll-600
}

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })
    
    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!
    console.log(`${this.firstName} total `, payable)
    console.log(this)
    return payable
}

