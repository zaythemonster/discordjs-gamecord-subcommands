// Beautified it, sorry :(

const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("gamecord")
    .setDescription("Games From GameCord")
    .addSubcommand(subcommand =>
      subcommand.setName("2048").setDescription("Plays The 2048 Game")
    )
    .addSubcommand(subcommand =>
      subcommand
        .setName("connect-4")
        .setDescription("Plays The Connect 4 Game")
        .addUserOption(option =>
          option
            .setName("opponent")
            .setDescription("person you want to play against")
            .setRequired(true)
        )
    )
    .addSubcommand(subcommand =>
      subcommand.setName("fast-type").setDescription("Plays The Fast Type Game")
    )
    .addSubcommand(subcommand =>
      subcommand
        .setName("find-emoji")
        .setDescription("Plays The Find Emoji Game")
    )
    .addSubcommand(subcommand =>
      subcommand.setName("fishy").setDescription("Plays The Fishy Game")
    )
    .addSubcommand(subcommand =>
      subcommand.setName("flood").setDescription("Plays The Flood Game")
    )
    .addSubcommand(subcommand =>
      subcommand
        .setName("guess-the-pokemon")
        .setDescription("Plays The Guess the Pokemon Game")
    )
    .addSubcommand(subcommand =>
      subcommand.setName("hangman").setDescription("Plays The Hangman Game")
    )
    .addSubcommand(subcommand =>
      subcommand
        .setName("matchpairs")
        .setDescription("Plays The Match Pairs Game")
    )
    .addSubcommand(subcommand =>
      subcommand
        .setName("minesweeper")
        .setDescription("Plays The Minesweeper Game")
    )
    .addSubcommand(subcommand =>
      subcommand
        .setName("rock-paper-scissors")
        .setDescription("Plays The Rock Paper Scissors Game")
        .addUserOption(option =>
          option
            .setName("opponent")
            .setDescription("person you want to play against")
            .setRequired(true)
        )
    )
    .addSubcommand(subcommand =>
      subcommand.setName("slots").setDescription("Plays The Slots Game")
    )
    .addSubcommand(subcommand =>
      subcommand.setName("snake").setDescription("Plays The Snake Game")
    )
    .addSubcommand(subcommand =>
      subcommand
        .setName("tic-tac-toe")
        .setDescription("Plays The Tic Tac Toe Game")
        .addUserOption(option =>
          option
            .setName("opponent")
            .setDescription("person you want to play against")
            .setRequired(true)
        )
    )
    .addSubcommand(subcommand =>
      subcommand.setName("trivia").setDescription("Plays The Trivia Game")
    )
    .addSubcommand(subcommand =>
      subcommand.setName("wordle").setDescription("Plays The Wordle Game")
    )
    .addSubcommand(subcommand =>
      subcommand
        .setName("would-you-rather")
        .setDescription("Plays The Would You Rather Game")
    )
    .setDMPermission(false),

  async execute(interaction, client) {
    const channel = interaction.channel;

    if (interaction.options.getSubcommand() === "2048") {
      const { TwoZeroFourEight } = require("discord-gamecord");

      const Game = new TwoZeroFourEight({
        message: interaction,
        isSlashGame: true,
        embed: {
          title: "2048",
          color: "#5865F2"
        },
        emojis: {
          up: "⬆️",
          down: "⬇️",
          left: "⬅️",
          right: "➡️"
        },
        timeoutTime: 60000,
        buttonStyle: "PRIMARY",
        playerOnlyMessage: "Only {player} can use these buttons."
      });

      Game.startGame();
      Game.on("gameOver", result => {
        console.log(result); // =>  { result... }
      });
    }

    if (interaction.options.getSubcommand() === "connect-4") {
      const { Connect4 } = require("discord-gamecord");

      const Game = new Connect4({
        message: interaction,
        isSlashGame: true,
        opponent: interaction.options.getUser("opponent"),
        embed: {
          title: "Connect4 Game",
          statusTitle: "Status",
          color: "#5865F2"
        },
        emojis: {
          board: "⚪",
          player1: "🔴",
          player2: "🟡"
        },
        mentionUser: true,
        timeoutTime: 60000,
        buttonStyle: "PRIMARY",
        turnMessage: "{emoji} | Its turn of player **{player}**.",
        winMessage: "{emoji} | **{player}** won the Connect4 Game.",
        tieMessage: "The Game tied! No one won the Game!",
        timeoutMessage: "The Game went unfinished! No one won the Game!",
        playerOnlyMessage: "Only {player} and {opponent} can use these buttons."
      });

      Game.startGame();
      Game.on("gameOver", result => {
        console.log(result); // =>  { result... }
      });
    }

    if (interaction.options.getSubcommand() === "emojify") {
      const { Emojify } = require("discord-gamecord");
      const Text = "Discord Gamecord";

      channel.send(await Emojify(Text));
    }

    if (interaction.options.getSubcommand() === "fast-type") {
      const { FastType } = require("discord-gamecord");

      const Game = new FastType({
        message: interaction,
        isSlashGame: true,
        embed: {
          title: "Fast Type",
          color: "#5865F2",
          description: "You have {time} seconds to type the sentence below."
        },
        timeoutTime: 60000,
        sentence: "Some really cool sentence to fast type.",
        winMessage:
          "You won! You finished the type race in {time} seconds with wpm of {wpm}.",
        loseMessage: "You lost! You didn't type the correct sentence in time."
      });

      Game.startGame();
      Game.on("gameOver", result => {
        console.log(result); // =>  { result... }
      });
    }

    if (interaction.options.getSubcommand() === "find-emoji") {
      const { FindEmoji } = require("discord-gamecord");

      const Game = new FindEmoji({
        message: interaction,
        isSlashGame: true,
        embed: {
          title: "Find Emoji",
          color: "#5865F2",
          description: "Remember the emojis from the board below.",
          findDescription: "Find the {emoji} emoji before the time runs out."
        },
        timeoutTime: 60000,
        hideEmojiTime: 5000,
        buttonStyle: "PRIMARY",
        emojis: ["🍉", "🍇", "🍊", "🍋", "🥭", "🍎", "🍏", "🥝"],
        winMessage: "You won! You selected the correct emoji. {emoji}",
        loseMessage: "You lost! You selected the wrong emoji. {emoji}",
        timeoutMessage: "You lost! You ran out of time. The emoji is {emoji}",
        playerOnlyMessage: "Only {player} can use these buttons."
      });

      Game.startGame();
      Game.on("gameOver", result => {
        console.log(result); // =>  { result... }
      });
    }

    if (interaction.options.getSubcommand() === "fishy") {
      const { Fishy } = require("discord-gamecord");
      let player = {};

      const Game = new Fishy({
        message: interaction,
        isSlashGame: true,
        player: player,
        embed: {
          title: "Fishy Inventory",
          color: "#5865F2"
        },
        fishes: {
          junk: { emoji: "🔧", price: 5 },
          common: { emoji: "🐟", price: 10 },
          uncommon: { emoji: "🐠", price: 20 },
          rare: { emoji: "🐡", price: 50 }
        },
        fishyRodPrice: 10,
        catchMessage:
          "You caught a {fish}. You paid {amount} for the fishing rod.",
        sellMessage:
          "You sold {amount}x {emoji} {type} items for a total of {price}.",
        noBalanceMessage:
          "You don't have enough balance to rent a fishing rod.",
        invalidTypeMessage:
          "Fish type can only be junk, common, uncommon or rare.",
        invalidAmountMessage: "Amount must be between 0 and fish max amount.",
        noItemMessage: "You don't have any of this item in your inventory."
      });

      // Catch Fish
      Game.catchFish();
      Game.on("catchFish", fishy => {
        player = fishy.player;
      });

      // Sell Fish
      Game.sellFish(fishType, amount);
      Game.on("sellFish", fishy => {
        player = fishy.player;
      });
      // FishType: junk || common || uncommon || rare

      // PLayer Inventory
      Game.fishyInventory();
    }

    if (interaction.options.getSubcommand() === "flood") {
      const { Flood } = require("discord-gamecord");

      const Game = new Flood({
        message: interaction,
        isSlashGame: true,
        embed: {
          title: "Flood",
          color: "#5865F2"
        },
        difficulty: 13,
        timeoutTime: 60000,
        buttonStyle: "PRIMARY",
        emojis: ["🟥", "🟦", "🟧", "🟪", "🟩"],
        winMessage: "You won! You took **{turns}** turns.",
        loseMessage: "You lost! You took **{turns}** turns.",
        playerOnlyMessage: "Only {player} can use these buttons."
      });

      Game.startGame();
      Game.on("gameOver", result => {
        console.log(result); // =>  { result... }
      });
    }

    if (interaction.options.getSubcommand() === "guess-the-pokemon") {
      const { GuessThePokemon } = require("discord-gamecord");

      const Game = new GuessThePokemon({
        message: interaction,
        isSlashGame: true,
        embed: {
          title: "Who's The Pokemon",
          color: "#5865F2"
        },
        timeoutTime: 60000,
        winMessage: "You guessed it right! It was a {pokemon}.",
        loseMessage: "Better luck next time! It was a {pokemon}.",
        errMessage: "Unable to fetch pokemon data! Please try again.",
        playerOnlyMessage: "Only {player} can use these buttons."
      });

      Game.startGame();
      Game.on("gameOver", result => {
        console.log(result); // =>  { result... }
      });
    }

    if (interaction.options.getSubcommand() === "hangman") {
      const { Hangman } = require("discord-gamecord");

      const Game = new Hangman({
        message: interaction,
        isSlashGame: true,
        embed: {
          title: "Hangman",
          color: "#5865F2"
        },
        hangman: {
          hat: "🎩",
          head: "😟",
          shirt: "👕",
          pants: "🩳",
          boots: "👞👞"
        },
        customWord: "Gamecord",
        timeoutTime: 60000,
        theme: "nature",
        winMessage: "You won! The word was **{word}**.",
        loseMessage: "You lost! The word was **{word}**.",
        playerOnlyMessage: "Only {player} can use these buttons."
      });

      Game.startGame();
      Game.on("gameOver", result => {
        console.log(result); // =>  { result... }
      });
    }

    if (interaction.options.getSubcommand() === "matchpairs") {
      const { MatchPairs } = require("discord-gamecord");

      const Game = new MatchPairs({
        message: interaction,
        isSlashGame: true,
        embed: {
          title: "Match Pairs",
          color: "#5865F2",
          description:
            "**Click on the buttons to match emojis with their pairs.**"
        },
        timeoutTime: 60000,
        emojis: [
          "🍉",
          "🍇",
          "🍊",
          "🥭",
          "🍎",
          "🍏",
          "🥝",
          "🥥",
          "🍓",
          "🫐",
          "🍍",
          "🥕",
          "🥔"
        ],
        winMessage:
          "**You won the Game! You turned a total of `{tilesTurned}` tiles.**",
        loseMessage:
          "**You lost the Game! You turned a total of `{tilesTurned}` tiles.**",
        playerOnlyMessage: "Only {player} can use these buttons."
      });

      Game.startGame();
      Game.on("gameOver", result => {
        console.log(result); // =>  { result... }
      });
    }

    if (interaction.options.getSubcommand() === "minesweeper") {
      const { Minesweeper } = require("discord-gamecord");

      const Game = new Minesweeper({
        message: interaction,
        isSlashGame: true,
        embed: {
          title: "Minesweeper",
          color: "#5865F2",
          description: "Click on the buttons to reveal the blocks except mines."
        },
        emojis: { flag: "🚩", mine: "💣" },
        mines: 5,
        timeoutTime: 60000,
        winMessage: "You won the Game! You successfully avoided all the mines.",
        loseMessage: "You lost the Game! Beaware of the mines next time.",
        playerOnlyMessage: "Only {player} can use these buttons."
      });

      Game.startGame();
      Game.on("gameOver", result => {
        console.log(result); // =>  { result... }
      });
    }

    if (interaction.options.getSubcommand() === "rock-paper-scissors") {
      const { RockPaperScissors } = require("discord-gamecord");

      const Game = new RockPaperScissors({
        message: interaction,
        isSlashGame: true,
        opponent: interaction.options.getUser("opponent"),
        embed: {
          title: "Rock Paper Scissors",
          color: "#5865F2",
          description: "Press a button below to make a choice."
        },
        buttons: {
          rock: "Rock",
          paper: "Paper",
          scissors: "Scissors"
        },
        emojis: {
          rock: "🌑",
          paper: "📰",
          scissors: "✂️"
        },
        mentionUser: true,
        timeoutTime: 60000,
        buttonStyle: "PRIMARY",
        pickMessage: "You choose {emoji}.",
        winMessage: "**{player}** won the Game! Congratulations!",
        tieMessage: "The Game tied! No one won the Game!",
        timeoutMessage: "The Game went unfinished! No one won the Game!",
        playerOnlyMessage: "Only {player} and {opponent} can use these buttons."
      });

      Game.startGame();
      Game.on("gameOver", result => {
        console.log(result); // =>  { result... }
      });
    }

    if (interaction.options.getSubcommand() === "slots") {
      const { Slots } = require("discord-gamecord");

      const Game = new Slots({
        message: interaction,
        isSlashGame: true,
        embed: {
          title: "Slot Machine",
          color: "#5865F2"
        },
        slots: ["🍇", "🍊", "🍋", "🍌"]
      });

      Game.startGame();
      Game.on("gameOver", result => {
        console.log(result); // =>  { result... }
      });
    }

    if (interaction.options.getSubcommand() === "snake") {
      const { Snake } = require("discord-gamecord");

      const Game = new Snake({
        message: interaction,
        isSlashGame: true,
        embed: {
          title: "Snake Game",
          overTitle: "Game Over",
          color: "#5865F2"
        },
        emojis: {
          board: "⬛",
          food: "🍎",
          up: "⬆️",
          down: "⬇️",
          left: "⬅️",
          right: "➡️"
        },
        snake: { head: "🟢", body: "🟩", tail: "🟢", skull: "💀" },
        foods: ["🍎", "🍇", "🍊", "🫐", "🥕", "🥝", "🌽"],
        stopButton: "Stop",
        timeoutTime: 60000,
        playerOnlyMessage: "Only {player} can use these buttons."
      });

      Game.startGame();
      Game.on("gameOver", result => {
        console.log(result); // =>  { result... }
      });
    }

    if (interaction.options.getSubcommand() === "tic-tac-toe") {
      const { TicTacToe } = require("discord-gamecord");

      const Game = new TicTacToe({
        message: interaction,
        isSlashGame: true,
        opponent: interaction.options.getUser("opponent"),
        embed: {
          title: "Tic Tac Toe",
          color: "#5865F2",
          statusTitle: "Status",
          overTitle: "Game Over"
        },
        emojis: {
          xButton: "❌",
          oButton: "🔵",
          blankButton: "➖"
        },
        mentionUser: true,
        timeoutTime: 60000,
        xButtonStyle: "DANGER",
        oButtonStyle: "PRIMARY",
        turnMessage: "{emoji} | Its turn of player **{player}**.",
        winMessage: "{emoji} | **{player}** won the TicTacToe Game.",
        tieMessage: "The Game tied! No one won the Game!",
        timeoutMessage: "The Game went unfinished! No one won the Game!",
        playerOnlyMessage: "Only {player} and {opponent} can use these buttons."
      });

      Game.startGame();
      Game.on("gameOver", result => {
        console.log(result); // =>  { result... }
      });
    }

    if (interaction.options.getSubcommand() === "trivia") {
      const { Trivia } = require("discord-gamecord");

      const Game = new Trivia({
        message: interaction,
        isSlashGame: true,
        embed: {
          title: "Trivia",
          color: "#5865F2",
          description: "You have 60 seconds to guess the answer."
        },
        timeoutTime: 60000,
        buttonStyle: "PRIMARY",
        trueButtonStyle: "SUCCESS",
        falseButtonStyle: "DANGER",
        mode: "multiple", // multiple || single
        difficulty: "medium", // easy || medium || hard
        winMessage: "You won! The correct answer is {answer}.",
        loseMessage: "You lost! The correct answer is {answer}.",
        errMessage: "Unable to fetch question data! Please try again.",
        playerOnlyMessage: "Only {player} can use these buttons."
      });

      Game.startGame();
      Game.on("gameOver", result => {
        console.log(result); // =>  { result... }
      });
    }

    if (interaction.options.getSubcommand() === "wordle") {
      const { Wordle } = require("discord-gamecord");

      const Game = new Wordle({
        message: interaction,
        isSlashGame: true,
        embed: {
          title: "Wordle",
          color: "#5865F2"
        },
        customWord: null,
        timeoutTime: 60000,
        winMessage: "You won! The word was **{word}**.",
        loseMessage: "You lost! The word was **{word}**.",
        playerOnlyMessage: "Only {player} can use these buttons."
      });

      Game.startGame();
      Game.on("gameOver", result => {
        console.log(result); // =>  { result... }
      });
    }

    if (interaction.options.getSubcommand() === "would-you-rather") {
      const { WouldYouRather } = require("discord-gamecord");

      const Game = new WouldYouRather({
        message: interaction,
        isSlashGame: true,
        embed: {
          title: "Would You Rather",
          color: "#5865F2"
        },
        buttons: {
          option1: "Option 1",
          option2: "Option 2"
        },
        timeoutTime: 60000,
        errMessage: "Unable to fetch question data! Please try again.",
        playerOnlyMessage: "Only {player} can use these buttons."
      });
      Game.startGame();
    }
  }
};
