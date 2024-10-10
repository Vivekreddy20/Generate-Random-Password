const passwordBox=document.getElementById("Password");
const size=12;
const upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase="abcdefghijklmnopqrstuvwxyz";
const numbers="1234567890";
const symbols="!@#$%^&*(_\+>?|";

const allChairs=numbers+upperCase+lowerCase+symbols;
function randomPassword()
{
    let password="";
    while(password.length<size)
    {
        password=password+allChairs[Math.floor(Math.random() * allChairs.length)];
    }
    passwordBox.value=password;
}
function copyPassword()
{
    passwordBox.select();
    document.execCommand("copy");
}
