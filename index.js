let alph = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
    num = '1234567890',
    special = '`~!@#$%^&*()-_=+[]{}\\|;:,./?<>',
    logPut = true,
    guesses = 0,
    done = false,
    pass,
    result,
    shouldPlay = true,
    passed = false;

let text1 = ` ▄████▄   ██▀███   ▄▄▄       ▄████▄   ██ ▄█▀ ██▓███   ▄▄▄        ██████   ██████ 
▒██▀ ▀█  ▓██ ▒ ██▒▒████▄    ▒██▀ ▀█   ██▄█▒ ▓██░  ██▒▒████▄    ▒██    ▒ ▒██    ▒ 
▒▓█    ▄ ▓██ ░▄█ ▒▒██  ▀█▄  ▒▓█    ▄ ▓███▄░ ▓██░ ██▓▒▒██  ▀█▄  ░ ▓██▄   ░ ▓██▄   
▒▓▓▄ ▄██▒▒██▀▀█▄  ░██▄▄▄▄██ ▒▓▓▄ ▄██▒▓██ █▄ ▒██▄█▓▒ ▒░██▄▄▄▄██   ▒   ██▒  ▒   ██▒
▒ ▓███▀ ░░██▓ ▒██▒ ▓█   ▓██▒▒ ▓███▀ ░▒██▒ █▄▒██▒ ░  ░ ▓█   ▓██▒▒██████▒▒▒██████▒▒
░ ░▒ ▒  ░░ ▒▓ ░▒▓░ ▒▒   ▓▒█░░ ░▒ ▒  ░▒ ▒▒ ▓▒▒▓▒░ ░  ░ ▒▒   ▓▒█░▒ ▒▓▒ ▒ ░▒ ▒▓▒ ▒ ░
  ░  ▒     ░▒ ░ ▒░  ▒   ▒▒ ░  ░  ▒   ░ ░▒ ▒░░▒ ░       ▒   ▒▒ ░░ ░▒  ░ ░░ ░▒  ░ ░
░          ░░   ░   ░   ▒   ░        ░ ░░ ░ ░░         ░   ▒   ░  ░  ░  ░  ░  ░  
░ ░         ░           ░  ░░ ░      ░  ░                  ░  ░      ░        ░  
░                           ░                                                    
`,
    text2 = `⠀⠀⠀⠀⠀⣀⣠⠤⠶⠶⣖⡛⠛⠿⠿⠯⠭⠍⠉⣉⠛⠚⠛⠲⣄⠀⠀⠀⠀⠀\n⠀⠀⢀⡴⠋⠁⠀⡉⠁⢐⣒⠒⠈⠁⠀⠀⠀⠈⠁⢂⢅⡂⠀⠀⠘⣧⠀⠀⠀⠀\n⠀⠀⣼⠀⠀⠀⠁⠀⠀⠀⠂⠀⠀⠀⠀⢀⣀⣤⣤⣄⡈⠈⠀⠀⠀⠘⣇⠀⠀⠀\n⢠⡾⠡⠄⠀⠀⠾⠿⠿⣷⣦⣤⠀⠀⣾⣋⡤⠿⠿⠿⠿⠆⠠⢀⣀⡒⠼⢷⣄⠀\n⣿⠊⠊⠶⠶⢦⣄⡄⠀⢀⣿⠀⠀⠀⠈⠁⠀⠀⠙⠳⠦⠶⠞⢋⣍⠉⢳⡄⠈⣧\n⢹⣆⡂⢀⣿⠀⠀⡀⢴⣟⠁⠀⢀⣠⣘⢳⡖⠀⠀⣀⣠⡴⠞⠋⣽⠷⢠⠇⠀⣼\n⠀⢻⡀⢸⣿⣷⢦⣄⣀⣈⣳⣆⣀⣀⣤⣭⣴⠚⠛⠉⣹⣧⡴⣾⠋⠀⠀⣘⡼⠃\n⠀⢸⡇⢸⣷⣿⣤⣏⣉⣙⣏⣉⣹⣁⣀⣠⣼⣶⡾⠟⢻⣇⡼⠁⠀⠀⣰⠋⠀⠀\n⠀⢸⡇⠸⣿⡿⣿⢿⡿⢿⣿⠿⠿⣿⠛⠉⠉⢧⠀⣠⡴⠋⠀⠀⠀⣠⠇⠀⠀⠀\n⠀⢸⠀⠀⠹⢯⣽⣆⣷⣀⣻⣀⣀⣿⣄⣤⣴⠾⢛⡉⢄⡢⢔⣠⠞⠁⠀⠀⠀⠀\n⠀⢸⠀⠀⠀⠢⣀⠀⠈⠉⠉⠉⠉⣉⣀⠠⣐⠦⠑⣊⡥⠞⠋⠀⠀⠀⠀⠀⠀⠀\n⠀⢸⡀⠀⠁⠂⠀⠀⠀⠀⠀⠀⠒⠈⠁⣀⡤⠞⠋⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠙⠶⢤⣤⣤⣤⣤⡤⠴⠖⠚⠛⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
`;
setTimeout(() => {
    shouldPlay = false;
    console.clear() 
    main();
}, 1850);

function main() {
    console.clear();
    crackPass();
}

function crackPass() {
    console.clear();
    console.log(text1);
   
        logPut = !!confirm('Would you like to see the attempts while it is cracking your password? (makes it over 10000x slower, not exaggerating!)');
        if (confirm('numbers?')) {
            alph += num;
        }
        if (confirm('special characters?')) {
            alph += special;
        }
        alph = alph.split('');
        proceed();
    
}
function proceed() {
    console.clear();
    console.log(text1);
    pass = prompt('password to crack (will notify when cracked, and how many attempts it took)');
    if (pass.length > 10) {
        console.error('err: INVALID INPUT_STRLEN [code 0xa]');
        console.warn('Terminating process...');
    } else {
        for (let i = 0; i < pass.length; i++) {
            if (!alph.includes(pass.charAt(i))) {
                console.error('err: INVALID INPUT_INVALID CHAR [code 0x9]');
                console.warn('Terminating process...');
                passed = false;
                break;
            } else {
                passed = true;
            }
        }
        if (passed) start();
    }
}
function guess(o) {
    guesses++;
    if (!done) {
        if (pass === o) {
            done = true;
            setTimeout(() => { console.log(`${o} is your password! It took ${guesses} tries to guess it!`); }, 100);
        } else {
            if (logPut) console.log(o);
        }
    }
}

function start() {
    if (!logPut) console.log('cracking, please wait...');
    let beginLoop = '';
    endLoop = '',
        counter = '',
        result = '';
    for (var i = 0; i < pass.length; i++) {
        if (done) break;
        beginLoop += 'for(let loopCounter' + i + ' = 0;loopCounter' + i + ' < alph.length;loopCounter' + i + '++){if(done)break;';
        if (i > 0) {
            counter += '+';
        }
        counter += 'alph[loopCounter' + i + ']';
        endLoop += '}';
    }
    result = beginLoop + 'guess(' + counter + ')' + endLoop;
    eval(result);
}
