// const currentUser = getCurrentUser();
// const cards = getCards();

// // render

// renderHead(currentUser.name);
// renderCards(cards);

// function getCurrentUser() {
//   return {
//     name: "Mikle",
//   };
// }

// function getCards() {
//   let card1 = {
//     type: "Debit",
//     networkType: "MasterCard",
//     currencyType: "USD",
//     balance: 5750.53,
//     number: 5282345678901289,
//     expirationYear: 2025,
//     expirationMonth: 9,
//     transactions: [
//       {
//         title: "Order Revenue",
//         amount: 766,
//         date: new Date(2022, 3, 25, 16, 43, 22), // Месяцы в JavaScript начинаются с 0, поэтому 3 - это апрель.
//       },
//       {
//         title: "Withdrawal Initiated",
//         amount: -460,
//         date: new Date(2022, 3, 25, 16, 43, 22), // Месяцы в JavaScript начинаются с 0, поэтому 3 - это апрель.
//       },
//     ],
//   };

//   let card2 = {
//     type: "Credit",
//     networkType: "visa",
//     currencyType: "EUR",
//     balance: 1343.53,
//     number: 9232654321012032,
//     expirationYear: 2026,
//     expirationMonth: 4,
//     transactions: [
//       {
//         title: "Order Revenue",
//         amount: 874,
//         date: new Date(2022, 3, 25, 16, 43, 22), // Месяцы в JavaScript начинаются с 0, поэтому 3 - это апрель.
//       },
//       {
//         title: "Withdrawal Initiated",
//         amount: 274,
//         date: new Date(2022, 3, 25, 16, 43, 22), // Месяцы в JavaScript начинаются с 0, поэтому 3 - это апрель.
//       },
//     ],
//   };

//   let cards = [card1, card2];

//   return cards;
// }

// function renderHead(userName) {
//   document.write("<h1>", "Hello, " + userName, "</h1>");
// }

// function renderCards(cards) {
//   for (let i = 0; i < cards.length; i++) {
//     let card = cards[i];
//     renderCard(card);
//   }
// }

// function renderCard(card) {
//   renderCardIfo(card);
//   renderCardTransaction(card.transactions);

//   function renderCardIfo(card) {
//     let sign = "";
//     switch (card.currencyType) {
//       case "USD":
//         sign = "💵";
//         break;
//       case "EUR":
//         sign = "💶";
//         break;
//       default:
//         sign = "rub";
//     }

//     document.write(
//       "<span>",
//       "<b>",
//       card.type + " Card",
//       "</b>",
//       "</span>",
//       "<br>"
//     );
//     document.write(
//       "<span class='currentBalance'>",
//       "<p>",
//       "Current Balance",
//       "</p>",
//       "</span>",
//       "<br>"
//     );

//     document.write(
//       "<span>",
//       "<b>",
//       sign + card.currencyType,
//       " ",
//       "</b>",
//       "</span>"
//     );
//     document.write("<span>", "<b>", card.balance, "</b>", "</span>", "<br>");
//     document.write("<span>", "<b>", card.number, "</b>", "</span>", "<br>");
//     document.write(
//       "<span class='score'>",
//       card.expirationYear,
//       "/",
//       card.expirationMonth,
//       "</span>, '<br>'"
//     );
//   }

//   function renderCardTransaction(transactions) {
//     for (let j = 0; j < card.transactions.length; j++) {
//       let transaction = card.transactions[j];
//       document.write("<h2>", "History Transaction", "</h2>");
//       document.write("<ul>");
//       document.write("<li>", transaction.title, ", ", transaction.date, ",");
//       if (transaction.amount > 0) {
//         document.write("<span class=income>", transaction.amount, "</span>");
//       } else {
//         document.write("<span class=outcome>", transaction.amount, "</span>");
//       }
//       document.write("</li>");
//       document.write("</ul>");
//     }
//     document.write("<hr>");
//   }
// }

let number1 = Math.floor(Math.random() * 100);
if (number1 % 2 === 0) {
  console.log(number1 + ": Это четное число");
} else {
  console.log(number1 + ": Это нечетное число");
}
