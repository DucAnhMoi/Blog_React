// // Store initial
// const initialState = [
//   {
//     id: 1,
//     author: "DucAnhMoi",
//     time: "4 min",
//     title: "lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
//     paragraph:
//       "",
//     new: true,
//     hot: true,
//   },
//   {
//     id: 2,
//     author: "DucAnhMoi",
//     time: "4 min",
//     title: "lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
//     paragraph:
//       "",
//     new: true,
//     hot: true,
//   },
//   {
//     id: 3,
//     author: "DucAnhMoi",
//     time: "4 min",
//     title: "lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
//     paragraph:
//       "",
//     new: true,
//     hot: true,
//   },
//   {
//     id: 4,
//     author: "DucAnhMoi",
//     time: "4 min",
//     title: "lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
//     paragraph:
//       "",
//     new: true,
//     hot: true,
//   },
//   {
//     id: 5,
//     author: "DucAnhMoi",
//     time: "4 min",
//     title: "lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
//     paragraph:
//       "",
//     new: true,
//     hot: true,
//   },
//   {
//     id: 6,
//     author: "DucAnhMoi",
//     time: "4 min",
//     title: "lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
//     paragraph:
//       "",
//     new: true,
//     hot: true,
//   },
//   {
//     id: 7,
//     author: "DucAnhMoi",
//     time: "4 min",
//     title: "lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
//     paragraph:
//       "",
//     new: true,
//     hot: true,
//   },
//   {
//     id: 8,
//     author: "DucAnhMoi",
//     time: "4 min",
//     title: "lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
//     paragraph:
//       "",
//     new: true,
//     hot: true,
//   },
//   {
//     id: 9,
//     author: "DucAnhMoi",
//     time: "4 min",
//     title: "lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
//     paragraph:
//       "",
//     new: true,
//     hot: true,
//   },
//   {
//     id: 10,
//     author: "DucAnhMoi",
//     time: "4 min",
//     title: "lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
//     paragraph:
//       "",
//     new: true,
//     hot: true,
//   },
// ];

// // Reducer
// const blogReducer = (state = initialState, action) => {
//   switch (action.type) {
//     default:
//       return state;
//   }
// };

// export default blogReducer;

import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "blog",
  initialState: [
    {
      id: 1,
      author: "DucAnhMoi",
      time: "4 min",
      title: "Immediately-invoked function expression (IIFE) trong Javascript",
      paragraph:
        "Trong bài viết này chúng ta cùng tìm hiểu một cách khai báo function rất quen thuộc trong Javascript. Tuy nó quen thuộc nhưng có thể chúng ta chưa biết tên gọi hoặc cách thức hoạt động của nó nhứ thế nào?",
      new: true,
      hot: true,
    },
    {
      id: 2,
      author: "DucAnhMoi",
      time: "4 min",
      title: "Tìm hiểu sâu hơn về scope Javascript",
      paragraph:
        "Javascript có một vài khái niệm liên quan đến Scope, không một khái niệm nào trong số chúng là dễ hiểu đối với một new JavaScript developer(JS dev), thậm chí là cả những JS dev đã có kinh nghiệm. Trong bài viết này, tôi sẽ cố gắng giải thích cặn kẽ nhất về các khái niệm liên quan đến Scope trong JS.",
      new: true,
      hot: true,
    },
    {
      id: 3,
      author: "DucAnhMoi",
      time: "4 min",
      title: "JavaScript Closures",
      paragraph:
        "Closures là một khái niệm cơ bản trong Javascript mà mọi lập trình viên nên biết. Tôi nhận thấy rằng việc hiểu chính xác nội dung giúp cho các lập trình viên nắm vững các công cụ lập trình. Bài viết này sẽ đề cập đến việc Closures là gì và tại sao chúng ta lại cần phải biết nó.",
      new: true,
      hot: true,
    },
    {
      id: 4,
      author: "DucAnhMoi",
      time: "4 min",
      title: "Hoisting trong JavaScript",
      paragraph:
        "Hoisting là cơ chế của JavaScript cho phép các khai báo biến hoặc hàm được dời lên trên đầu phạm vi của chúng trước khi thực thi đoạn code. Điều này có nghĩa là bất kể hàm và biến được khai báo ở đâu, chúng đều được chuyển lên đầu phạm vi của chúng, bất kể là toàn cục hay cục bộ.",
      new: true,
      hot: true,
    },
    {
      id: 5,
      author: "DucAnhMoi",
      time: "4 min",
      title: "Tìm hiểu về Strict Mode trong Javascript",
      paragraph:
        'Chắc hẳn bạn đã bắt gặp dòng lệnh trên khi làm việc với JavaScript rồi chứ nhỉ? Đó là nội dung thường xuyên xuất hiện trong hầu hết các thư viện Javascript hiện đại. Vậy "use strict" là gì, nó có ảnh hưởng gì đến code của bạn, và liệu bạn có nên sử dụng nó?',
      new: true,
      hot: true,
    },
    {
      id: 6,
      author: "DucAnhMoi",
      time: "4 min",
      title: "Primitive type and Reference type",
      paragraph:
        "Trong bài viết này chúng ta cùng tìm hiểu về Primitive type và Reference type trong Javascript. Tuy nó quen thuộc nhưng có thể chúng ta chưa biết tên gọi hoặc cách thức hoạt động của nó nhứ thế nào?",
      new: true,
      hot: true,
    },
    {
      id: 7,
      author: "DucAnhMoi",
      time: "4 min",
      title: 'Từ khóa "this" trong JavaScript',
      paragraph:
        "Đối với các bạn đã và đang sử dụng Javascript thì this là một từ khóa vô cùng kinh điển và quen thuộc. Mình chắc rằng ít nhất một lần nó đã gây ra không ít phiền toái cho các bạn, nhất là đối với các bạn mới tiếp cận với Javascript (lúc mới học về Js mình cũng ngán thằng this này lắm. Chính vì vậy trong bài viết này chúng ta cùng tìm hiểu rõ hơn về từ khóa this này nhé.",
      new: true,
      hot: true,
    },
    {
      id: 8,
      author: "DucAnhMoi",
      time: "4 min",
      title: "Bind, Apply and Call trong javascript",
      paragraph:
        "Bind là một function nằm trong function prototype do đó chỉ có function mới có thể gọi dc nó. Chúng ta gọi Bind method dùng để xác định tham số “this” cho một function. bind() cho phép chúng ta dễ dàng thiết lập một đối tượng cụ thể sẽ bị ràng buộc này khi một chức năng hoặc phương pháp được gọi. Ở bài viết này, chúng ta sẽ cùng tìm hiểu một cách sâu nhất về các function này ?",
      new: true,
      hot: true,
    },
    {
      id: 9,
      author: "DucAnhMoi",
      time: "4 min",
      title: "Phân biệt kiểu biến var, let, và const trong JavaScript",
      paragraph:
        "Một trong những tính năng nổi bật của ES6 đó là sự bổ sung let và const phục vụ cho việc khai báo biến dữ liệu. Vậy tại sao lại cần tới let và const dù trước đó đã có var để khai báo biến, thì ở bài viết này chúng ta sẽ cùng tìm hiểu lý do của từng kiểu khai báo biến.",
      new: true,
      hot: true,
    },
    {
      id: 10,
      author: "DucAnhMoi",
      time: "4 min",
      title: "Tìm hiểu về Template Literals trong JavaScript",
      paragraph:
        "Trong bài viết này, bạn sẽ tìm hiểu sự khác biệt giữa single/double quote(dấu nháy đơn/kép) và template literals, các cách khác nhau để khai báo các chuỗi có hình dạng khác nhau, bao gồm các chuỗi nhiều dòng và chuỗi động thay đổi tùy thuộc vào giá trị của một biến hoặc biểu thức. Sau đó, bạn sẽ tìm hiểu về các tagged template literals và xem một số ví dụ thực tế về các dự án sử dụng chúng.",
      new: true,
      hot: true,
    },
    {
      id: 11,
      author: "DucAnhMoi",
      time: "4 min",
      title:
        "Thế nào là Arrow Function? Cách thức sử dụng Arrow Function và những điều cần chú ý",
      paragraph:
        "Arrow functions là một trong những tính năng mới rất hay của ES6. Việc sử dụng đúng cách arrow function giúp code trở nên ngắn gọn và dễ hiểu hơn. Vì vậy, trong bài viết này mình sẽ giúp bạn hiểu rõ hơn về arrow function trong JavaScript, cũng như biết cách sử dụng và những điều cần lưu ý khi sử dụng nó.",
      new: true,
      hot: true,
    },
    {
      id: 12,
      author: "DucAnhMoi",
      time: "4 min",
      title: "Class trong Javascript",
      paragraph:
        "Trong lập trình hướng đối tượng, class hay còn gọi là lớp được sử dụng để tạo đối tượng có thuộc tính (attribute) và phương thức (method). Từ phiên bản ECMAScript 6 thì JavaSript hỗ trợ tạo ra class giống các ngôn ngữ lập trình hướng đối tượng khác (Java, C++...).",
      new: true,
      hot: true,
    },
    {
      id: 13,
      author: "DucAnhMoi",
      time: "4 min",
      title: "Default parameter javascript",
      paragraph:
        "Default Parameter là giá trị mặc định của tham số khi truyền vào các function. Đối với Javascript thì có nhiều bạn chưa biết chức năng này mặc dù trong ES5 đã cung cấp săn cho chúng ta, tuy nhiên người ta cảm thấy cách tạo giá trị mặc định trong ES5 vẫn không hay nên họ đã bổ sung một cách khác mới hơn và đơn giản hơn rất nhiều trong ES6.",
      new: true,
      hot: true,
    },
    {
      id: 14,
      author: "DucAnhMoi",
      time: "4 min",
      title: "Object Literals nâng cao với ES6",
      paragraph:
        "Trong bài viết này chúng ta xem xét những gì có thể xảy ra với các Object Literals trong JavaScript, đặc biệt là theo các bản cập nhật ECMAScript gần đây. Khả năng tạo các đối tượng JavaScript sử dụng ký hiệu chữ rất mạnh mẽ. Các tính năng mới được giới thiệu từ ES2015 (ES6) giúp xử lý đối tượng dễ dàng hơn trong tất cả các trình duyệt hiện đại (không phải IE) và Node.js.",
      new: true,
      hot: true,
    },
    {
      id: 15,
      author: "DucAnhMoi",
      time: "4 min",
      title: "Rest parameters và spread-operator",
      paragraph:
        "Trong Javascript rất nhiều hàm được dựng sẵn cho phép bạn truyền vào với một số lượng tham số tùy ý, Trong bài viết này tôi sẽ hướng dẫn bạn cách để tạo ra các hàm kiểu như thế này.",
      new: true,
      hot: true,
    },
    {
      id: 16,
      author: "DucAnhMoi",
      time: "4 min",
      title: "Bàn về JS - Destructuring",
      paragraph:
        "Một trong những feature khá hay ho của ES6 gọi là destructuring. Hôm nay chúng ta hãy cùng tìm hiểu về destructuring nhé.",
      new: true,
      hot: true,
    },
  ],
  reducers: {},
});
