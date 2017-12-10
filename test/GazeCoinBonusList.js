var bonusListOutput={
   "contracts" : {
      "GazeCoinBonusList.sol:Admined" : {
         "abi" : "[{\"constant\":false,\"inputs\":[{\"name\":\"_addr\",\"type\":\"address\"}],\"name\":\"removeAdmin\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"\",\"type\":\"address\"}],\"name\":\"admins\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_addr\",\"type\":\"address\"}],\"name\":\"addAdmin\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"acceptOwnership\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"newOwner\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"addr\",\"type\":\"address\"}],\"name\":\"AdminAdded\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"addr\",\"type\":\"address\"}],\"name\":\"AdminRemoved\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"_from\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"_to\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"}]",
         "bin" : "606060405260008054600160a060020a033316600160a060020a03199091161790556103ef806100306000396000f3006060604052600436106100825763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416631785f53c8114610087578063429b62e5146100a857806370480275146100db57806379ba5097146100fa5780638da5cb5b1461010d578063d4ee1d901461013c578063f2fde38b1461014f575b600080fd5b341561009257600080fd5b6100a6600160a060020a036004351661016e565b005b34156100b357600080fd5b6100c7600160a060020a0360043516610212565b604051901515815260200160405180910390f35b34156100e657600080fd5b6100a6600160a060020a0360043516610227565b341561010557600080fd5b6100a66102cd565b341561011857600080fd5b61012061035b565b604051600160a060020a03909116815260200160405180910390f35b341561014757600080fd5b61012061036a565b341561015a57600080fd5b6100a6600160a060020a0360043516610379565b60005433600160a060020a0390811691161461018957600080fd5b600160a060020a03811660009081526002602052604090205460ff1615156101b057600080fd5b600160a060020a03811660009081526002602052604090819020805460ff191690557fa3b62bc36326052d97ea62d63c3d60308ed4c3ea8ac079dd8499f1e9c4f80c0f90829051600160a060020a03909116815260200160405180910390a150565b60026020526000908152604090205460ff1681565b60005433600160a060020a0390811691161461024257600080fd5b600160a060020a03811660009081526002602052604090205460ff161561026857600080fd5b600160a060020a03811660009081526002602052604090819020805460ff191660011790557f44d6d25963f097ad14f29f06854a01f575648a1ef82f30e562ccd3889717e33990829051600160a060020a03909116815260200160405180910390a150565b60015433600160a060020a039081169116146102e857600080fd5b600154600054600160a060020a0391821691167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3600180546000805473ffffffffffffffffffffffffffffffffffffffff19908116600160a060020a03841617909155169055565b600054600160a060020a031681565b600154600160a060020a031681565b60005433600160a060020a0390811691161461039457600080fd5b6001805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a03929092169190911790555600a165627a7a723058202fe5f53f8689258eed5a002646b3c7bd85143c1f84b20d1b68c4e2bd5cfc30fb0029"
      },
      "GazeCoinBonusList.sol:GazeCoinBonusList" : {
         "abi" : "[{\"constant\":false,\"inputs\":[{\"name\":\"_addr\",\"type\":\"address\"}],\"name\":\"removeAdmin\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"seal\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"\",\"type\":\"address\"}],\"name\":\"admins\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"addresses\",\"type\":\"address[]\"}],\"name\":\"remove\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_addr\",\"type\":\"address\"}],\"name\":\"addAdmin\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"\",\"type\":\"address\"}],\"name\":\"bonusList\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"acceptOwnership\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"newOwner\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"sealed\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"addresses\",\"type\":\"address[]\"},{\"name\":\"tier\",\"type\":\"uint256\"}],\"name\":\"add\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"fallback\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"addr\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"tier\",\"type\":\"uint256\"}],\"name\":\"AddressListed\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"addr\",\"type\":\"address\"}],\"name\":\"AdminAdded\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"addr\",\"type\":\"address\"}],\"name\":\"AdminRemoved\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"_from\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"_to\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"}]",
         "bin" : "6060604052341561000f57600080fd5b60008054600160a060020a033316600160a060020a03199091161790556108478061003b6000396000f3006060604052600436106100b95763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416631785f53c81146100c95780633fb27b85146100ea578063429b62e5146100fd5780635e4ba17c14610130578063704802751461017f57806376fbc07e1461019e57806379ba5097146101cf5780638da5cb5b146101e2578063d4ee1d9014610211578063e4b203ef14610224578063efac4db414610237578063f2fde38b14610288575b34156100c457600080fd5b600080fd5b34156100d457600080fd5b6100e8600160a060020a03600435166102a7565b005b34156100f557600080fd5b6100e861034b565b341561010857600080fd5b61011c600160a060020a0360043516610385565b604051901515815260200160405180910390f35b341561013b57600080fd5b6100e8600460248135818101908301358060208181020160405190810160405280939291908181526020018383602002808284375094965061039a95505050505050565b341561018a57600080fd5b6100e8600160a060020a03600435166104ff565b34156101a957600080fd5b6101bd600160a060020a03600435166105a5565b60405190815260200160405180910390f35b34156101da57600080fd5b6100e86105b7565b34156101ed57600080fd5b6101f5610645565b604051600160a060020a03909116815260200160405180910390f35b341561021c57600080fd5b6101f5610654565b341561022f57600080fd5b61011c610663565b341561024257600080fd5b6100e86004602481358181019083013580602081810201604051908101604052809392919081815260200183836020028082843750949650509335935061066c92505050565b341561029357600080fd5b6100e8600160a060020a03600435166107d1565b60005433600160a060020a039081169116146102c257600080fd5b600160a060020a03811660009081526002602052604090205460ff1615156102e957600080fd5b600160a060020a03811660009081526002602052604090819020805460ff191690557fa3b62bc36326052d97ea62d63c3d60308ed4c3ea8ac079dd8499f1e9c4f80c0f90829051600160a060020a03909116815260200160405180910390a150565b60005433600160a060020a0390811691161461036657600080fd5b60035460ff161561037657600080fd5b6003805460ff19166001179055565b60026020526000908152604090205460ff1681565b600160a060020a03331660009081526002602052604081205460ff16806103cf575060005433600160a060020a039081169116145b15156103da57600080fd5b60035460ff16156103ea57600080fd5b815115156103f757600080fd5b5060005b81518110156104fb57600082828151811061041257fe5b90602001906020020151600160a060020a0316141561043057600080fd5b6004600083838151811061044057fe5b90602001906020020151600160a060020a03168152602081019190915260400160002054156104f35760006004600084848151811061047b57fe5b90602001906020020151600160a060020a031681526020810191909152604001600020558181815181106104ab57fe5b90602001906020020151600160a060020a03167fbb3cf5779fafcf48320887f89249260da29cdccdccadb49b03870bfdf9daa173600060405190815260200160405180910390a25b6001016103fb565b5050565b60005433600160a060020a0390811691161461051a57600080fd5b600160a060020a03811660009081526002602052604090205460ff161561054057600080fd5b600160a060020a03811660009081526002602052604090819020805460ff191660011790557f44d6d25963f097ad14f29f06854a01f575648a1ef82f30e562ccd3889717e33990829051600160a060020a03909116815260200160405180910390a150565b60046020526000908152604090205481565b60015433600160a060020a039081169116146105d257600080fd5b600154600054600160a060020a0391821691167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3600180546000805473ffffffffffffffffffffffffffffffffffffffff19908116600160a060020a03841617909155169055565b600054600160a060020a031681565b600154600160a060020a031681565b60035460ff1681565b600160a060020a03331660009081526002602052604081205460ff16806106a1575060005433600160a060020a039081169116145b15156106ac57600080fd5b60035460ff16156106bc57600080fd5b825115156106c957600080fd5b5060005b82518110156107cc5760008382815181106106e457fe5b90602001906020020151600160a060020a0316141561070257600080fd5b816004600085848151811061071357fe5b90602001906020020151600160a060020a03168152602081019190915260400160002054146107c457816004600085848151811061074d57fe5b90602001906020020151600160a060020a0316815260208101919091526040016000205582818151811061077d57fe5b90602001906020020151600160a060020a03167fbb3cf5779fafcf48320887f89249260da29cdccdccadb49b03870bfdf9daa1738360405190815260200160405180910390a25b6001016106cd565b505050565b60005433600160a060020a039081169116146107ec57600080fd5b6001805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a03929092169190911790555600a165627a7a72305820b68a97cebb9986c53e57610b4309c6cbd0d4c58c25ded6bd11be300f13a05f950029"
      },
      "GazeCoinBonusList.sol:Owned" : {
         "abi" : "[{\"constant\":false,\"inputs\":[],\"name\":\"acceptOwnership\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"newOwner\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"_from\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"_to\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"}]",
         "bin" : "6060604052341561000f57600080fd5b60008054600160a060020a033316600160a060020a03199091161790556101fe8061003b6000396000f3006060604052600436106100615763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166379ba509781146100665780638da5cb5b1461007b578063d4ee1d90146100aa578063f2fde38b146100bd575b600080fd5b341561007157600080fd5b6100796100dc565b005b341561008657600080fd5b61008e61016a565b604051600160a060020a03909116815260200160405180910390f35b34156100b557600080fd5b61008e610179565b34156100c857600080fd5b610079600160a060020a0360043516610188565b60015433600160a060020a039081169116146100f757600080fd5b600154600054600160a060020a0391821691167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3600180546000805473ffffffffffffffffffffffffffffffffffffffff19908116600160a060020a03841617909155169055565b600054600160a060020a031681565b600154600160a060020a031681565b60005433600160a060020a039081169116146101a357600080fd5b6001805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a03929092169190911790555600a165627a7a7230582046aa2ad05d156402f11a1317d24cd64e37d797e0a4e9faa6c43805b067adcff30029"
      }
   },
   "version" : "0.4.18+commit.9cf6e910.Darwin.appleclang"
};
