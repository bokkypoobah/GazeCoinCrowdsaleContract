var tokenAddress="0x8C65e992297d5f092A756dEf24F4781a280198Ff";
var tokenAbi=[{"constant":true,"inputs":[{"name":"tokenOwner","type":"address"},{"name":"spender","type":"address"},{"name":"tokens","type":"uint256"},{"name":"_data","type":"bytes"},{"name":"fee","type":"uint256"},{"name":"nonce","type":"uint256"}],"name":"signedApproveAndCallHash","outputs":[{"name":"hash","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"minter","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"tokens","type":"uint256"}],"name":"approve","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"tokenOwner","type":"address"},{"name":"spender","type":"address"},{"name":"tokens","type":"uint256"},{"name":"fee","type":"uint256"},{"name":"nonce","type":"uint256"}],"name":"signedApproveHash","outputs":[{"name":"hash","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"spender","type":"address"},{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"tokens","type":"uint256"},{"name":"fee","type":"uint256"},{"name":"nonce","type":"uint256"}],"name":"signedTransferFromHash","outputs":[{"name":"hash","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"signedApproveAndCallSig","outputs":[{"name":"","type":"bytes4"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"tokens","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"tokens","type":"uint256"},{"name":"fee","type":"uint256"},{"name":"nonce","type":"uint256"},{"name":"sig","type":"bytes"},{"name":"feeAccount","type":"address"}],"name":"signedTransferFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"mintable","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"signedTransferSig","outputs":[{"name":"","type":"bytes4"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"tokenOwner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"tokenOwner","type":"address"},{"name":"to","type":"address"},{"name":"tokens","type":"uint256"},{"name":"fee","type":"uint256"},{"name":"nonce","type":"uint256"},{"name":"sig","type":"bytes"},{"name":"feeAccount","type":"address"}],"name":"signedTransfer","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"acceptOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"tokenOwner","type":"address"},{"name":"to","type":"address"},{"name":"tokens","type":"uint256"},{"name":"fee","type":"uint256"},{"name":"nonce","type":"uint256"},{"name":"sig","type":"bytes"},{"name":"feeAccount","type":"address"}],"name":"signedTransferCheck","outputs":[{"name":"result","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"disableMinting","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_newOwner","type":"address"}],"name":"transferOwnershipImmediately","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"bttsVersion","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"tokenOwner","type":"address"}],"name":"unlockAccount","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"transferable","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"tokenOwner","type":"address"},{"name":"spender","type":"address"},{"name":"tokens","type":"uint256"},{"name":"_data","type":"bytes"},{"name":"fee","type":"uint256"},{"name":"nonce","type":"uint256"},{"name":"sig","type":"bytes"},{"name":"feeAccount","type":"address"}],"name":"signedApproveAndCallCheck","outputs":[{"name":"result","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"tokenOwner","type":"address"},{"name":"to","type":"address"},{"name":"tokens","type":"uint256"},{"name":"fee","type":"uint256"},{"name":"nonce","type":"uint256"}],"name":"signedTransferHash","outputs":[{"name":"hash","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"signedApproveSig","outputs":[{"name":"","type":"bytes4"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"tokens","type":"uint256"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"enableTransfers","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"signedTransferFromSig","outputs":[{"name":"","type":"bytes4"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"tokenOwner","type":"address"},{"name":"spender","type":"address"},{"name":"tokens","type":"uint256"},{"name":"fee","type":"uint256"},{"name":"nonce","type":"uint256"},{"name":"sig","type":"bytes"},{"name":"feeAccount","type":"address"}],"name":"signedApproveCheck","outputs":[{"name":"result","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"tokens","type":"uint256"},{"name":"_data","type":"bytes"}],"name":"approveAndCall","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"tokenOwner","type":"address"},{"name":"tokens","type":"uint256"},{"name":"lockAccount","type":"bool"}],"name":"mint","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"newOwner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"tokenAddress","type":"address"},{"name":"tokens","type":"uint256"}],"name":"transferAnyERC20Token","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"tokenOwner","type":"address"},{"name":"spender","type":"address"}],"name":"allowance","outputs":[{"name":"remaining","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"signingPrefix","outputs":[{"name":"","type":"bytes"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"tokenOwner","type":"address"},{"name":"spender","type":"address"},{"name":"tokens","type":"uint256"},{"name":"fee","type":"uint256"},{"name":"nonce","type":"uint256"},{"name":"sig","type":"bytes"},{"name":"feeAccount","type":"address"}],"name":"signedApprove","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"tokenOwner","type":"address"},{"name":"spender","type":"address"},{"name":"tokens","type":"uint256"},{"name":"_data","type":"bytes"},{"name":"fee","type":"uint256"},{"name":"nonce","type":"uint256"},{"name":"sig","type":"bytes"},{"name":"feeAccount","type":"address"}],"name":"signedApproveAndCall","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"spender","type":"address"},{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"tokens","type":"uint256"},{"name":"fee","type":"uint256"},{"name":"nonce","type":"uint256"},{"name":"sig","type":"bytes"},{"name":"feeAccount","type":"address"}],"name":"signedTransferFromCheck","outputs":[{"name":"result","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_minter","type":"address"}],"name":"setMinter","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"owner","type":"address"},{"name":"symbol","type":"string"},{"name":"name","type":"string"},{"name":"decimals","type":"uint8"},{"name":"initialSupply","type":"uint256"},{"name":"mintable","type":"bool"},{"name":"transferable","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"from","type":"address"},{"indexed":false,"name":"to","type":"address"}],"name":"MinterUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"tokenOwner","type":"address"},{"indexed":false,"name":"tokens","type":"uint256"},{"indexed":false,"name":"lockAccount","type":"bool"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[],"name":"MintingDisabled","type":"event"},{"anonymous":false,"inputs":[],"name":"TransfersEnabled","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"tokenOwner","type":"address"}],"name":"AccountUnlocked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"tokens","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"tokenOwner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"tokens","type":"uint256"}],"name":"Approval","type":"event"}];
var token=eth.contract(tokenAbi).at(tokenAddress);
