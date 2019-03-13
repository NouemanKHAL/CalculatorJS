var aStr='0';
var a=0;
var begin=1;
var op='none';
var res=0;
var equal=false;
var negate=false;

function NUM(nbr)
{
  if(equal==true) C();
  aStr=aStr+nbr;
  document.getElementById('result').innerHTML=parseFloat(aStr);
  if(negate==true)
  {
    a=-parseFloat(aStr);
    negate=false;

  }
  else a=parseFloat(aStr);

  document.getElementById('result').innerHTML=parseFloat(aStr);
}

function NEGATE()
{
  negate=true;
}

function BACKSPACE(){
  begin = 0;
  aStr=aStr.slice(0,-1);
  document.getElementById('result').innerHTML=parseFloat(aStr);
  a=parseFloat(aStr);
}

function OPERATION(charOp)
{
  equal = false;
  begin = 0;
  if(op=='none'){
    a=parseFloat(aStr);
    res=a;
  }
  else a=parseFloat(aStr);
  aStr='0';
  op=charOp;
  document.getElementById('result').innerHTML=res+charOp;
}

function C()
{
  begin = 1;
  aStr='0';
  a=0;
  b=0;
  op='none';
  res=0;
  document.getElementById('result').innerHTML='0';
}

function CE()
{
  begin = 0;
  aStr='0';
  document.getElementById('result').innerHTML='0';
}

function SQRT()
{
  if(begin==1) res=a;
  res=Math.sqrt(res);
  document.getElementById('result').innerHTML=res;
  a=res;
}

function SQUARE()
{

  if(begin==1) res=a;
  res=res*res;
  document.getElementById('result').innerHTML=res;
  a=res;
}

function INVERSE()
{
  if(begin==1) res=a;
  if(res!=0)res=1/res;
  else(document.getElementById('result').innerHTML='MATH ERROR : DIV SUR 0 IMPOSSIBLE !');
  document.getElementById('result').innerHTML=res;
  a=res;
}

function EQUAL()
{
  equal=true;
  begin = 0;
  aStr='0';
  hist=' ';
  switch (op) {
    case '+': res = res + a;
      document.getElementById('result').innerHTML=res;
      break;

    case '-': res = res - a;
      document.getElementById('result').innerHTML=res;
      break;

    case 'x': res = res * a;
      document.getElementById('result').innerHTML=res;
      break;

    case '/': if(a!=0)
              {
                res = res / a;
                document.getElementById('result').innerHTML=res;
              }
              else(document.getElementById('result').innerHTML='MATH ERROR : DIV SUR 0 IMPOSSIBLE !');
              break;
    default: break;
  }

}
