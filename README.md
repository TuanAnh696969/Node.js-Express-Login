# Node.js-Express-Login
Node.js & PostgreSQL: User Authentication & Authorization

#
Chúng ta sẽ xây dựng một ví dụ API Node.js Ẽpress Rét hỗ trợ xác thực dưạ trên mã thông báo với JWT(json web token) và PostgreSQL.

Xác thực dựa trên amc thông báo.
![image](https://user-images.githubusercontent.com/104268054/227715525-a2fe92a9-d154-4b5f-aafd-752ea544d54b.png)

Có ba phần quan trọng của JWT: Header, Payload, Signature. Chúng cùng nhau được kết hợp thành một cấu trúc tiêu chuẩn: header.payload.signature.

Khách hàng thường đính kèm JWT trong tiêu đề Ủy quyền với tiền tố Bearer:

Ủy quyền: Người mang [tiêu đề].[tải trọng].[chữ ký]

Hoặc chỉ trong tiêu đề x-access-token:

x-access-token: [header].[payload].[signature]


#
Chúng tôi sẽ xây dựng một ứng dụng Node.js Express trong đó:

- User can signup new account, or login with username & password.
- User information will be stored in PostgreSQL database
- By User’s role (admin, moderator, user), we authorize the User to access resources

These are APIs that we need to provide:



#
Quy trình đăng ký và đăng nhập bằng xác thực JWT

![image](https://user-images.githubusercontent.com/104268054/227715781-60cb40eb-b5c3-4680-bf8c-38d86afe077c.png)

![image](https://user-images.githubusercontent.com/104268054/227715785-cdc93138-45f5-46c7-b20e-4e7f7ccdffb8.png)

#
Kiến trúc Node.js Express với Xác thực & Ủy quyền

![image](https://user-images.githubusercontent.com/104268054/227715837-fe31e131-8e06-4be6-8bcd-ffaec7b1ee2e.png)

Thông qua các tuyến Express, yêu cầu HTTP phù hợp với một tuyến sẽ được kiểm tra bởi Phần mềm trung gian CORS trước khi đến lớp Bảo mật.
Lớp bảo mật bao gồm:
-Phần mềm trung gian xác thực JWT: xác minh Đăng ký, xác minh mã thông báo
-Phần mềm trung gian ủy quyền: kiểm tra vai trò của Người dùng với bản ghi trong cơ sở dữ liệu
-Nếu các phần mềm trung gian này đưa ra bất kỳ lỗi nào, một thông báo sẽ được gửi dưới dạng phản hồi HTTP.
-Bộ điều khiển tương tác với Cơ sở dữ liệu PostgreSQL thông qua Sequelize và gửi phản hồi HTTP (mã thông báo, thông tin người dùng, dữ liệu dựa trên vai trò…) cho máy khách.
