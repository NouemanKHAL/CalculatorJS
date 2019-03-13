var a='0';
var b=0;
var c=0;
var operation;
var res=0;

function C()
{
  a='0'
  b=0;
  c=0;
  operation='a';
  res=0;
  document.getElementById('result').innerHTML=0;
}

function NUM(nbr)
{
  a=a+nbr;
  c=parseFloat(a);
  document.getElementById('result').innerHTML=c;
}

function OPERATION(op)
{
  operation = op;
  EQUAL(op);
  a='0';
  document.getElementById('result').innerHTML=' ';
}

function EQUAL(op)
{
  switch (op) {
    case '+':  res = res+c; break;
    case '-':  res = res-c; break;
    case '*':  res = res*c; break;
    case '/':  if(c!=0) res = res/c; break;

    default: alert("Veuillez choisir une operation !");
    break;
  }
  document.getElementById('result').innerHTML=res;
}
