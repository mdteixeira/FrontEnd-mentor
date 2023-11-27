function calculate() {
    valid = true;

    var day = document.getElementById('day');
    var month = document.getElementById('month');
    var year = document.getElementById('year');

    var label1 = document.getElementById('label-1');
    var label2 = document.getElementById('label-2');
    var label3 = document.getElementById('label-3');

    var error1 = document.getElementById('error-1');
    var error2 = document.getElementById('error-2');
    var error3 = document.getElementById('error-3');

    document.getElementById('Oyears').textContent = '--';
    document.getElementById('Omonths').textContent = '--';
    document.getElementById('Odays').textContent = '--';

    error1.classList = 'hidden';
    day.classList.remove('error-border');
    label1.classList.remove(`error-text`);

    error2.classList = 'hidden';
    month.classList.remove('error-border');
    label2.classList.remove(`error-text`);

    error3.classList = 'hidden';
    year.classList.remove('error-border');
    label3.classList.remove(`error-text`);

    var date1 = new Date();
    var date2 = new Date(year.value, month.value - 1, day.value);

    var difference = date1.getTime() - date2.getTime();

    if (day.value > 31 || day.value <= 0) {
        day.classList.add('error-border');
        error1.textContent = 'Enter a valid day.';
        error1.classList.remove('hidden');
        label1.classList.add(`error-text`);
        valid = false;
    }

    if (month.value > 12 || month.value <= 0) {
        month.classList.add('error-border');
        error2.textContent = 'Enter a valid month.';
        error2.classList.remove('hidden');
        label2.classList.add(`error-text`);
        valid = false;
    }

    if (0 >= year.value) {
        year.classList.add('error-border');
        error3.textContent = 'Enter a valid year.';
        error3.classList.remove('hidden');
        label3.classList.add(`error-text`);
        valid = false;
    }

    if (day.value == '') {
        day.classList.add('error-border');
        error1.textContent = 'This field is required.';
        error1.classList.remove('hidden');
        label1.classList.add(`error-text`);
        valid = false;
    }

    if (month.value == '') {
        month.classList.add('error-border');
        error2.textContent = 'This field is required.';
        error2.classList.remove('hidden');
        label2.classList.add(`error-text`);
        valid = false;
    }

    if (year.value == '') {
        year.classList.add('error-border');
        error3.textContent = 'This field is required.';
        error3.classList.remove('hidden');
        label3.classList.add(`error-text`);
        valid = false;
    }

    if (date1 < date2) {
        year.classList.add('error-border');
        error3.textContent = 'Must be on past.';
        error3.classList.remove('hidden');
        label3.classList.add(`error-text`);
        valid = false;
    }

    if (valid == true) {
        var totaldays = Math.ceil(difference / (1000 * 3600 * 24));
        var years = Math.floor(totaldays / 365);
        var months = Math.floor((totaldays / 365) * 12) - years * 12;
        var days = totaldays - years * 365 - months * 30;

        console.log(years, ' - ', months, ' - ', days, ' - ', totaldays);

        document.getElementById('Oyears').textContent = years;
        document.getElementById('Omonths').textContent = months;
        document.getElementById('Odays').textContent = days;
    }
}
