function sayHello() {
    alert("hello")
    }


    function heDear(){

        var myName="Sucessful";
        document.write(myName)
    }

    function addNumbers(){


        var a = 33;31;
        var b = 10;
        var c = "Test";
        var linebreak = "<br />";
        document.write("a + b = ");
        result = a + b;
        document.write(result);
        document.write(linebreak);
        document.write("a - b = ");
        result = a - b;
        document.write(result);
        document.write(linebreak);
        document.write("a / b = ");
        result = a / b;
        document.write(result);
        document.write(linebreak);
        document.write("a % b = ");
        result = a % b;
        document.write(result);
        document.write(linebreak);
        document.write("a + b + c = ");
        result = a + b + c;
        document.write(result);
        document.write(linebreak);
        a = a++;
        document.write("a++ = ");
        result = a++;
        document.write(result);
        document.write(linebreak);
        b = b--;
        document.write("b-- = ");
        result = b--;
        document.write(result);
        document.write(linebreak);
    }


    function validate(form) {
        fail = validateForename(form.forename.value)
        fail += validateSurname(form.surname.value)
        fail += validateUsername(form.username.value)
        fail += validatePassword(form.password.value)
        fail += validateAge(form.age.value)
        fail += validateEmail(form.email.value)
        if (fail == "") return true
        else { alert(fail); return false }
    }