var crowdsaleOutput={
   "contracts" : {
      "GazeCoinCrowdsale.sol:ApproveAndCallFallBack" : {
         "abi" : "[{\"constant\":false,\"inputs\":[{\"name\":\"from\",\"type\":\"address\"},{\"name\":\"tokens\",\"type\":\"uint256\"},{\"name\":\"token\",\"type\":\"address\"},{\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"receiveApproval\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"}]",
         "bin" : ""
      },
      "GazeCoinCrowdsale.sol:BTTSTokenInterface" : {
         "abi" : "[{\"constant\":true,\"inputs\":[{\"name\":\"tokenOwner\",\"type\":\"address\"},{\"name\":\"spender\",\"type\":\"address\"},{\"name\":\"tokens\",\"type\":\"uint256\"},{\"name\":\"data\",\"type\":\"bytes\"},{\"name\":\"fee\",\"type\":\"uint256\"},{\"name\":\"nonce\",\"type\":\"uint256\"}],\"name\":\"signedApproveAndCallHash\",\"outputs\":[{\"name\":\"hash\",\"type\":\"bytes32\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"spender\",\"type\":\"address\"},{\"name\":\"tokens\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"name\":\"success\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"tokenOwner\",\"type\":\"address\"},{\"name\":\"spender\",\"type\":\"address\"},{\"name\":\"tokens\",\"type\":\"uint256\"},{\"name\":\"fee\",\"type\":\"uint256\"},{\"name\":\"nonce\",\"type\":\"uint256\"}],\"name\":\"signedApproveHash\",\"outputs\":[{\"name\":\"hash\",\"type\":\"bytes32\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"spender\",\"type\":\"address\"},{\"name\":\"from\",\"type\":\"address\"},{\"name\":\"to\",\"type\":\"address\"},{\"name\":\"tokens\",\"type\":\"uint256\"},{\"name\":\"fee\",\"type\":\"uint256\"},{\"name\":\"nonce\",\"type\":\"uint256\"}],\"name\":\"signedTransferFromHash\",\"outputs\":[{\"name\":\"hash\",\"type\":\"bytes32\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"signedApproveAndCallSig\",\"outputs\":[{\"name\":\"\",\"type\":\"bytes4\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"from\",\"type\":\"address\"},{\"name\":\"to\",\"type\":\"address\"},{\"name\":\"tokens\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"name\":\"success\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"spender\",\"type\":\"address\"},{\"name\":\"from\",\"type\":\"address\"},{\"name\":\"to\",\"type\":\"address\"},{\"name\":\"tokens\",\"type\":\"uint256\"},{\"name\":\"fee\",\"type\":\"uint256\"},{\"name\":\"nonce\",\"type\":\"uint256\"},{\"name\":\"sig\",\"type\":\"bytes\"},{\"name\":\"feeAccount\",\"type\":\"address\"}],\"name\":\"signedTransferFrom\",\"outputs\":[{\"name\":\"success\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"signedTransferSig\",\"outputs\":[{\"name\":\"\",\"type\":\"bytes4\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"tokenOwner\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"name\":\"balance\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"tokenOwner\",\"type\":\"address\"},{\"name\":\"to\",\"type\":\"address\"},{\"name\":\"tokens\",\"type\":\"uint256\"},{\"name\":\"fee\",\"type\":\"uint256\"},{\"name\":\"nonce\",\"type\":\"uint256\"},{\"name\":\"sig\",\"type\":\"bytes\"},{\"name\":\"feeAccount\",\"type\":\"address\"}],\"name\":\"signedTransfer\",\"outputs\":[{\"name\":\"success\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"tokenOwner\",\"type\":\"address\"},{\"name\":\"to\",\"type\":\"address\"},{\"name\":\"tokens\",\"type\":\"uint256\"},{\"name\":\"fee\",\"type\":\"uint256\"},{\"name\":\"nonce\",\"type\":\"uint256\"},{\"name\":\"sig\",\"type\":\"bytes\"},{\"name\":\"feeAccount\",\"type\":\"address\"}],\"name\":\"signedTransferCheck\",\"outputs\":[{\"name\":\"result\",\"type\":\"uint8\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"disableMinting\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"bttsVersion\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"tokenOwner\",\"type\":\"address\"}],\"name\":\"unlockAccount\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"tokenOwner\",\"type\":\"address\"},{\"name\":\"spender\",\"type\":\"address\"},{\"name\":\"tokens\",\"type\":\"uint256\"},{\"name\":\"data\",\"type\":\"bytes\"},{\"name\":\"fee\",\"type\":\"uint256\"},{\"name\":\"nonce\",\"type\":\"uint256\"},{\"name\":\"sig\",\"type\":\"bytes\"},{\"name\":\"feeAccount\",\"type\":\"address\"}],\"name\":\"signedApproveAndCallCheck\",\"outputs\":[{\"name\":\"result\",\"type\":\"uint8\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"tokenOwner\",\"type\":\"address\"},{\"name\":\"to\",\"type\":\"address\"},{\"name\":\"tokens\",\"type\":\"uint256\"},{\"name\":\"fee\",\"type\":\"uint256\"},{\"name\":\"nonce\",\"type\":\"uint256\"}],\"name\":\"signedTransferHash\",\"outputs\":[{\"name\":\"hash\",\"type\":\"bytes32\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"signedApproveSig\",\"outputs\":[{\"name\":\"\",\"type\":\"bytes4\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"to\",\"type\":\"address\"},{\"name\":\"tokens\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"name\":\"success\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"enableTransfers\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"signedTransferFromSig\",\"outputs\":[{\"name\":\"\",\"type\":\"bytes4\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"tokenOwner\",\"type\":\"address\"},{\"name\":\"spender\",\"type\":\"address\"},{\"name\":\"tokens\",\"type\":\"uint256\"},{\"name\":\"fee\",\"type\":\"uint256\"},{\"name\":\"nonce\",\"type\":\"uint256\"},{\"name\":\"sig\",\"type\":\"bytes\"},{\"name\":\"feeAccount\",\"type\":\"address\"}],\"name\":\"signedApproveCheck\",\"outputs\":[{\"name\":\"result\",\"type\":\"uint8\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"spender\",\"type\":\"address\"},{\"name\":\"tokens\",\"type\":\"uint256\"},{\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"approveAndCall\",\"outputs\":[{\"name\":\"success\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"tokenOwner\",\"type\":\"address\"},{\"name\":\"tokens\",\"type\":\"uint256\"},{\"name\":\"lockAccount\",\"type\":\"bool\"}],\"name\":\"mint\",\"outputs\":[{\"name\":\"success\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"tokenOwner\",\"type\":\"address\"},{\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"name\":\"remaining\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"signingPrefix\",\"outputs\":[{\"name\":\"\",\"type\":\"bytes\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"tokenOwner\",\"type\":\"address\"},{\"name\":\"spender\",\"type\":\"address\"},{\"name\":\"tokens\",\"type\":\"uint256\"},{\"name\":\"fee\",\"type\":\"uint256\"},{\"name\":\"nonce\",\"type\":\"uint256\"},{\"name\":\"sig\",\"type\":\"bytes\"},{\"name\":\"feeAccount\",\"type\":\"address\"}],\"name\":\"signedApprove\",\"outputs\":[{\"name\":\"success\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"tokenOwner\",\"type\":\"address\"},{\"name\":\"spender\",\"type\":\"address\"},{\"name\":\"tokens\",\"type\":\"uint256\"},{\"name\":\"data\",\"type\":\"bytes\"},{\"name\":\"fee\",\"type\":\"uint256\"},{\"name\":\"nonce\",\"type\":\"uint256\"},{\"name\":\"sig\",\"type\":\"bytes\"},{\"name\":\"feeAccount\",\"type\":\"address\"}],\"name\":\"signedApproveAndCall\",\"outputs\":[{\"name\":\"success\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"spender\",\"type\":\"address\"},{\"name\":\"from\",\"type\":\"address\"},{\"name\":\"to\",\"type\":\"address\"},{\"name\":\"tokens\",\"type\":\"uint256\"},{\"name\":\"fee\",\"type\":\"uint256\"},{\"name\":\"nonce\",\"type\":\"uint256\"},{\"name\":\"sig\",\"type\":\"bytes\"},{\"name\":\"feeAccount\",\"type\":\"address\"}],\"name\":\"signedTransferFromCheck\",\"outputs\":[{\"name\":\"result\",\"type\":\"uint8\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"to\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"from\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"to\",\"type\":\"address\"}],\"name\":\"MinterUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"tokenOwner\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"tokens\",\"type\":\"uint256\"},{\"indexed\":false,\"name\":\"lockAccount\",\"type\":\"bool\"}],\"name\":\"Mint\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[],\"name\":\"MintingDisabled\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[],\"name\":\"TransfersEnabled\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"tokenOwner\",\"type\":\"address\"}],\"name\":\"AccountUnlocked\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"tokens\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"tokenOwner\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"tokens\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"}]",
         "bin" : ""
      },
      "GazeCoinCrowdsale.sol:ERC20Interface" : {
         "abi" : "[{\"constant\":false,\"inputs\":[{\"name\":\"spender\",\"type\":\"address\"},{\"name\":\"tokens\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"name\":\"success\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"from\",\"type\":\"address\"},{\"name\":\"to\",\"type\":\"address\"},{\"name\":\"tokens\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"name\":\"success\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"tokenOwner\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"name\":\"balance\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"to\",\"type\":\"address\"},{\"name\":\"tokens\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"name\":\"success\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"tokenOwner\",\"type\":\"address\"},{\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"name\":\"remaining\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"tokens\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"tokenOwner\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"tokens\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"}]",
         "bin" : ""
      },
      "GazeCoinCrowdsale.sol:GazeCoinCrowdsale" : {
         "abi" : "[{\"constant\":true,\"inputs\":[],\"name\":\"usdCentPerGze\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"ethAmount\",\"type\":\"uint256\"},{\"name\":\"bonusPercent\",\"type\":\"uint256\"}],\"name\":\"gzeFromEth\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"finalised\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"START_DATE\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"tokenOwner\",\"type\":\"address\"},{\"name\":\"gzeAmount\",\"type\":\"uint256\"}],\"name\":\"addPrecommitmentFloor\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"ethMinContribution\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"TEAM_PERCENT\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"wallet\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"END_DATE\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"usdCap\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"generatedGze\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"contributedUsd\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"acceptOwnership\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"ethCap\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"a\",\"type\":\"uint256\"}],\"name\":\"roundUp\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"pure\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"ethLockedThreshold\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"tokenOwner\",\"type\":\"address\"},{\"name\":\"ethAmount\",\"type\":\"uint256\"},{\"name\":\"bonusPercent\",\"type\":\"uint256\"}],\"name\":\"addPrecommitment\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"whitelistBonusPercent\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"a\",\"type\":\"uint256\"},{\"name\":\"b\",\"type\":\"uint256\"}],\"name\":\"safeSub\",\"outputs\":[{\"name\":\"c\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"pure\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"finalise\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"contributedEth\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"a\",\"type\":\"uint256\"},{\"name\":\"b\",\"type\":\"uint256\"}],\"name\":\"safeDiv\",\"outputs\":[{\"name\":\"c\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"pure\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"usdPerKEther\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"gzePerEth\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"TEAM\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"a\",\"type\":\"uint256\"},{\"name\":\"b\",\"type\":\"uint256\"}],\"name\":\"safeMul\",\"outputs\":[{\"name\":\"c\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"pure\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"newOwner\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_bttsToken\",\"type\":\"address\"}],\"name\":\"setBTTSToken\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_ethLockedThreshold\",\"type\":\"uint256\"}],\"name\":\"setEthLockedThreshold\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"a\",\"type\":\"uint256\"},{\"name\":\"b\",\"type\":\"uint256\"}],\"name\":\"safeAdd\",\"outputs\":[{\"name\":\"c\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"pure\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"bttsToken\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"name\":\"_wallet\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"payable\":true,\"stateMutability\":\"payable\",\"type\":\"fallback\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"oldEthLockedThreshold\",\"type\":\"uint256\"},{\"indexed\":false,\"name\":\"newEthLockedThreshold\",\"type\":\"uint256\"}],\"name\":\"ETHLockedThresholdUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"oldBTTSToken\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"newBTTSToken\",\"type\":\"address\"}],\"name\":\"BTTSTokenUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"addr\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"ethAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"name\":\"ethRefund\",\"type\":\"uint256\"},{\"indexed\":false,\"name\":\"usdAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"name\":\"gzeAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"name\":\"contributedEth\",\"type\":\"uint256\"},{\"indexed\":false,\"name\":\"contributedUsd\",\"type\":\"uint256\"},{\"indexed\":false,\"name\":\"generatedGze\",\"type\":\"uint256\"},{\"indexed\":false,\"name\":\"lockAccount\",\"type\":\"bool\"}],\"name\":\"Contributed\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"_from\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"_to\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"}]",
         "bin" : "6060604052635a2691b3600355635a269249600455662386f26fc100006005556302160ec06006556207103e6007556753444835ec5800006008556023600d556014600e55600f805461010060a860020a03191674a33a6c312d9ad0e0f2e95541beed0cc081621fd000179055601e601055341561007c57600080fd5b60405160208061108e8339810160405280805160008054600160a060020a03338116600160a060020a031992831617909255600280549290931691161790555050610fc2806100cc6000396000f3006060604052600436106101875763ffffffff60e060020a600035041663081d57a581146103f657806309c110a11461041b578063214bb60f14610434578063372c65331461045b57806337405db81461046e57806341d20767146104925780634c186197146104a5578063521eb273146104b8578063545599ff146104e75780636298c93a146104fa5780636a5392d71461050d5780636e2e9c3b1461052057806379ba5097146105335780637a468170146105465780637b6a6f4a14610559578063885bed201461056f5780638da5cb5b1461058257806393e4bf4f146105955780639843c027146105ba578063a293d1e8146105cd578063a4399263146105e6578063b4d3ef5f146105f9578063b5931f7c1461060c578063bb5b586b14610625578063c135c04014610638578063cecdc6aa1461064b578063d05c78da1461065e578063d4ee1d9014610677578063db4e1df51461068a578063de2bbf76146106a9578063e6cb9013146106bf578063ed62543d146106d8578063f2fde38b146106eb575b60008060008060008060035442101580156101a457506004544211155b15156101af57600080fd5b6101b761070a565b600954106101c457600080fd5b600554600096503410156101d757600080fd5b349450600093506101e661070a565b6101f260095487610727565b111561021a5761020b61020361070a565b60095461073d565b9450610217348661073d565b93505b61023861022986600754610752565b683635c9adc5dea00000610777565b92506102448587610798565b9150610252600b5483610727565b600b556009546102629086610727565b600955600a546102729084610727565b600a5550600854600c5490851190600160a060020a031663d1a1beb433848460006040516020015260405160e060020a63ffffffff8616028152600160a060020a039093166004840152602483019190915215156044820152606401602060405180830381600087803b15156102e757600080fd5b6102c65a03f115156102f857600080fd5b50505060405180515050600254600160a060020a031685156108fc0286604051600060405180830381858888f19350505050151561033557600080fd5b33600160a060020a03167f71f9426194c36fef8258927780371bbad40f6828c5814b47937e0c454677709e86868686600954600a54600b548960405197885260208801969096526040808801959095526060870193909352608086019190915260a085015260c084015290151560e0830152610100909101905180910390a260008411156103ee57600160a060020a03331684156108fc0285604051600060405180830381858888f1935050505015156103ee57600080fd5b505050505050005b341561040157600080fd5b6104096107b7565b60405190815260200160405180910390f35b341561042657600080fd5b610409600435602435610798565b341561043f57600080fd5b6104476107bd565b604051901515815260200160405180910390f35b341561046657600080fd5b6104096107c6565b341561047957600080fd5b610490600160a060020a03600435166024356107cc565b005b341561049d57600080fd5b610409610929565b34156104b057600080fd5b61040961092f565b34156104c357600080fd5b6104cb610935565b604051600160a060020a03909116815260200160405180910390f35b34156104f257600080fd5b610409610944565b341561050557600080fd5b61040961094a565b341561051857600080fd5b610409610950565b341561052b57600080fd5b610409610956565b341561053e57600080fd5b61049061095c565b341561055157600080fd5b61040961070a565b341561056457600080fd5b6104096004356109ea565b341561057a57600080fd5b610409610a1d565b341561058d57600080fd5b6104cb610a23565b34156105a057600080fd5b610490600160a060020a0360043516602435604435610a32565b34156105c557600080fd5b610409610bc5565b34156105d857600080fd5b61040960043560243561073d565b34156105f157600080fd5b610490610bcb565b341561060457600080fd5b610409610e12565b341561061757600080fd5b610409600435602435610777565b341561063057600080fd5b610409610e18565b341561064357600080fd5b610409610e1e565b341561065657600080fd5b6104cb610e38565b341561066957600080fd5b610409600435602435610752565b341561068257600080fd5b6104cb610e4c565b341561069557600080fd5b610490600160a060020a0360043516610e5b565b34156106b457600080fd5b610490600435610ee1565b34156106ca57600080fd5b610409600435602435610727565b34156106e357600080fd5b6104cb610f3d565b34156106f657600080fd5b610490600160a060020a0360043516610f4c565b60006007546015600a0a6006540281151561072157fe5b04905090565b8181018281101561073757600080fd5b92915050565b60008282111561074c57600080fd5b50900390565b81810282158061076c575081838281151561076957fe5b04145b151561073757600080fd5b600080821161078557600080fd5b818381151561079057fe5b049392505050565b600d54600754600091906103e890850260648501020481151561079057fe5b600d5481565b600f5460ff1681565b60035481565b6000805481908190819033600160a060020a039081169116146107ee57600080fd5b600f5460ff16156107fe57600080fd5b600093506000925060009150610816600b5486610727565b600b5550600c54600090600160a060020a031663d1a1beb4878784806040516020015260405160e060020a63ffffffff8616028152600160a060020a039093166004840152602483019190915215156044820152606401602060405180830381600087803b151561088657600080fd5b6102c65a03f1151561089757600080fd5b505050604051805190505085600160a060020a03167f71f9426194c36fef8258927780371bbad40f6828c5814b47937e0c454677709e85848689600954600a54600b548960405197885260208801969096526040808801959095526060870193909352608086019190915260a085015260c084015290151560e0830152610100909101905180910390a2505050505050565b60055481565b60105481565b600254600160a060020a031681565b60045481565b60065481565b600b5481565b600a5481565b60015433600160a060020a0390811691161461097757600080fd5b600154600054600160a060020a0391821691167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3600180546000805473ffffffffffffffffffffffffffffffffffffffff19908116600160a060020a03841617909155169055565b6000670de0b6b3a764000080830682811115610a1657610a13610a0d8584610727565b8261073d565b92505b5050919050565b60085481565b600054600160a060020a031681565b6000805481908190819033600160a060020a03908116911614610a5457600080fd5b600f5460ff1615610a6457600080fd5b610a7361022987600754610752565b9350610a7f8686610798565b925060009150610a91600b5484610727565b600b55600954610aa19087610727565b600955600a54610ab19085610727565b600a5550600c54600090600160a060020a031663d1a1beb4888584806040516020015260405160e060020a63ffffffff8616028152600160a060020a039093166004840152602483019190915215156044820152606401602060405180830381600087803b1515610b2157600080fd5b6102c65a03f11515610b3257600080fd5b505050604051805190505086600160a060020a03167f71f9426194c36fef8258927780371bbad40f6828c5814b47937e0c454677709e87848787600954600a54600b548960405197885260208801969096526040808801959095526060870193909352608086019190915260a085015260c084015290151560e0830152610100909101905180910390a250505050505050565b600e5481565b6000805481908190819033600160a060020a03908116911614610bed57600080fd5b600f5460ff1615610bfd57600080fd5b610c1f610c0d600b546064610752565b610c1a606460105461073d565b610777565b9350610c37610c3085601054610752565b6064610777565b9250610c45600b5484610727565b600b55600c54600f54600160a060020a039182169163d1a1beb491610100900416856000806040516020015260405160e060020a63ffffffff8616028152600160a060020a039093166004840152602483019190915215156044820152606401602060405180830381600087803b1515610cbe57600080fd5b6102c65a03f11515610ccf57600080fd5b5050506040518051905050610ce5600b546109ea565b9150600b54821115610d9b57610cfd82600b5461073d565b9050610d0b600b5482610727565b600b55600c54600254600160a060020a039182169163d1a1beb49116836000806040516020015260405160e060020a63ffffffff8616028152600160a060020a039093166004840152602483019190915215156044820152606401602060405180830381600087803b1515610d7f57600080fd5b6102c65a03f11515610d9057600080fd5b505050604051805150505b610da361070a565b60095410610dff57600c54600160a060020a0316637e5cd5c16040518163ffffffff1660e060020a028152600401600060405180830381600087803b1515610dea57600080fd5b6102c65a03f11515610dfb57600080fd5b5050505b5050600f805460ff191660011790555050565b60095481565b60075481565b6000610e33670de0b6b3a76400006000610798565b905090565b600f546101009004600160a060020a031681565b600154600160a060020a031681565b60005433600160a060020a03908116911614610e7657600080fd5b600c54600160a060020a0380831691167f3c32673f6f3164beac0929065588e958c62b9ae087a486a272234f61cbd28b3160405160405180910390a3600c805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055565b60005433600160a060020a03908116911614610efc57600080fd5b7fd94be37b8304564d97a3625bd7726f6b953651cd0e16771a1066ace1077cf9e56008548260405191825260208201526040908101905180910390a1600855565b600c54600160a060020a031681565b60005433600160a060020a03908116911614610f6757600080fd5b6001805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a03929092169190911790555600a165627a7a72305820f62a1e285d5f6d7895574f43cbaeb915a4805ba3ee643e3f91fd44a7f27bb7b10029"
      },
      "GazeCoinCrowdsale.sol:Owned" : {
         "abi" : "[{\"constant\":false,\"inputs\":[],\"name\":\"acceptOwnership\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"newOwner\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"_from\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"_to\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"}]",
         "bin" : "6060604052341561000f57600080fd5b60008054600160a060020a033316600160a060020a03199091161790556101fe8061003b6000396000f3006060604052600436106100615763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166379ba509781146100665780638da5cb5b1461007b578063d4ee1d90146100aa578063f2fde38b146100bd575b600080fd5b341561007157600080fd5b6100796100dc565b005b341561008657600080fd5b61008e61016a565b604051600160a060020a03909116815260200160405180910390f35b34156100b557600080fd5b61008e610179565b34156100c857600080fd5b610079600160a060020a0360043516610188565b60015433600160a060020a039081169116146100f757600080fd5b600154600054600160a060020a0391821691167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3600180546000805473ffffffffffffffffffffffffffffffffffffffff19908116600160a060020a03841617909155169055565b600054600160a060020a031681565b600154600160a060020a031681565b60005433600160a060020a039081169116146101a357600080fd5b6001805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a03929092169190911790555600a165627a7a72305820015821b1954be95d48f73fff4b95f3917e645bfbc5c4fb8555d9621c74f6be960029"
      },
      "GazeCoinCrowdsale.sol:SafeMath" : {
         "abi" : "[{\"constant\":true,\"inputs\":[{\"name\":\"a\",\"type\":\"uint256\"},{\"name\":\"b\",\"type\":\"uint256\"}],\"name\":\"safeSub\",\"outputs\":[{\"name\":\"c\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"pure\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"a\",\"type\":\"uint256\"},{\"name\":\"b\",\"type\":\"uint256\"}],\"name\":\"safeDiv\",\"outputs\":[{\"name\":\"c\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"pure\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"a\",\"type\":\"uint256\"},{\"name\":\"b\",\"type\":\"uint256\"}],\"name\":\"safeMul\",\"outputs\":[{\"name\":\"c\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"pure\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"a\",\"type\":\"uint256\"},{\"name\":\"b\",\"type\":\"uint256\"}],\"name\":\"safeAdd\",\"outputs\":[{\"name\":\"c\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"pure\",\"type\":\"function\"}]",
         "bin" : "6060604052341561000f57600080fd5b6101798061001e6000396000f3006060604052600436106100615763ffffffff7c0100000000000000000000000000000000000000000000000000000000600035041663a293d1e88114610066578063b5931f7c14610091578063d05c78da146100aa578063e6cb9013146100c3575b600080fd5b341561007157600080fd5b61007f6004356024356100dc565b60405190815260200160405180910390f35b341561009c57600080fd5b61007f6004356024356100f1565b34156100b557600080fd5b61007f600435602435610112565b34156100ce57600080fd5b61007f60043560243561013d565b6000828211156100eb57600080fd5b50900390565b60008082116100ff57600080fd5b818381151561010a57fe5b049392505050565b81810282158061012c575081838281151561012957fe5b04145b151561013757600080fd5b92915050565b8181018281101561013757600080fd00a165627a7a7230582059f0ae837008fe9ee4c311720133cf42f62b1a4a8d2472069d9b2cd1565d7a970029"
      }
   },
   "version" : "0.4.18+commit.9cf6e910.Darwin.appleclang"
};
