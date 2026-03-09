const log=console.log;

log(process.argv);

import yargs from'yargs';
import { hideBin } from 'yargs/helpers';

const argvParser=yargs(hideBin(process.argv));

log("Yargs parsed arguments : ",argvParser);

argvParser.command({
    command:"greet",
    describe:"Greet Name",
    builder:{
        name:{
            describe:"Name of user",
            type:"String",
            demandOption:true
        },
        shout:{
            describe:"Shout greeting",
            type:"boolean",
            default:false,
            demandOption:false,
            alias:"s"
        }
    },
    handler(argv){
        if(argv.shout) {
            log(`HELLO ${argv.name.toUpperCase()}`);
            return;
        }
        log(`Hello ${argv.name}`);
    }
})

argvParser.command({
    command:"add",
    description:"Adding two numbers",
    builder:{
        number1:{
            command:"num1",
            type:"Number",
            demandOption:true,
            alias:"a"
        },
        number2:{
            command:"num2",
            type:"Number",
            demandOption:true,
            alias:"b",
            default:3
        },
        number3:{
            command:"num3",
            type:"Number",
            alias:'c'
        }
    },handler(arg){
        if(arg.number3!=undefined){
            log(`${arg.number1} + ${arg.number2} + ${arg.number3} = ${arg.number1+arg.number2+arg.number3}`);
            return;
        }
        log(`${arg.number1} + ${arg.number2} = ${arg.number1+arg.number2}`);
    }
})


argvParser.parse();