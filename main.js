class rec {
    getInfo() {
        return {
            id: "tilemaps", 
            name: "Tilemaps", 
            blocks: [
                {
                    opcode: "spotimaps", 
                    blockType: Scratch.BlockType.COMMAND, 
                    text: "set sprite of tilemap to [SPR]",
                    arguments: {
                        SPR: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'Sprite1'
                        }
                    }
                }
            ]
        };
    }
    spotimaps(args) {
        return args.SPR;
    }
}

Scratch.extensions.register(new rec());