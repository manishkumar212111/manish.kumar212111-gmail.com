
# Random Variables and password Generetor

This package is used to generete random variable and password of any length , any type and different formats.

## Installation

Install :- `npm i random-var-generetor`

## Usage

| Function name | Description                    |
| ------------- | ------------------------------ |
| `randomString(length , VPype)`      | Generete random varaibles.       |
| `passwordGeneretor(length , PType)`   | Generete password of all types     |


Arguments and it's usage

+ length : length of random variable/password
+ vType : type of random variable `(optional,  default type is alnumsp)`
  + string : only chars in random variable
  + number : only number in random variable
  + alnum : alphabets and numbers in random variable
  + alnumsp : alphabets ,numbers and special characters in random variable

+ PType : type of password `(optional default type is moderate)`
  + weak : weak password consists of `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz`
  + moderate : moderate password consists of `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789`
  + strong : strong password consists of `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()?><|}{+~!`
  
## Sample Code

>`import RandomVarGeneretor from 'random-var-generetor';`
`console.log(RandomVarGeneretor.randomString(length , type)) // replace length with integer `
`console.log(RandomVarGeneretor.passwordGeneretor(length , type)) // replace length with integer `