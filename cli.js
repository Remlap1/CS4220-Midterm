import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

yargs(hideBin(process.argv))
    .usage('Usage: $0 <command>')
    .command(
        'search <keyword>',
        'Search by keyword',
        (yargs) => {
            yargs.positional('keyword', {
                describe: 'Search by keyword',
                type: 'string',
            });
        },
        (yargs) => {
            //TODO call app.js search function
            console.log(`Search by keyword: ${yargs.keyword}`);
        }
    )
    .command(
        'history <keywords...>',
        'Search past by keywords',
        (yargs) => {
            yargs.positional('keywords', {
                describe: 'Search by keywords',
                type: 'string',
            });
        },
        (yargs) => {
            // TODO call function in app.js to search history
            console.log(`Searching history ${yargs.keywords}`);
        }
    )
    .help()
    .alias('h', 'help').argv;