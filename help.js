document.addEventListener("DOMContentLoaded", function () {
  var listItems = document
    .getElementById("questions")
    .getElementsByClassName("list-group-item");

  for (var i = 0; i < listItems.length; i++) {
    listItems[i].addEventListener("click", function () {
      for (var j = 0; j < listItems.length; j++) {
        listItems[j].classList.remove("active");
      }
      this.classList.add("active");
      var selectedItemText = this.textContent;
      handleSelectedText(selectedItemText);
    });
  }
});
function handleSelectedText(selectedText) {
  var textContainer = document.getElementById("answer");
  switch (selectedText) {
    case "LÀM CÁCH NÀO TÔI CÓ THỂ TRẢ HÀNG?":
      var refundPolicyText =
        "<strong>Chính Sách Hoàn Trả</strong><br><br>" +
        "<ol>" +
        "<li><strong>Thời Gian Hoàn Trả:</strong> Khách hàng có quyền yêu cầu hoàn trả sản phẩm trong vòng [số ngày] ngày kể từ ngày mua hàng.</li>" +
        "<li><strong>Điều Kiện Hoàn Trả:</strong> Sản phẩm cần phải ở trong tình trạng mới và nguyên vẹn, không bị hỏng hoặc có dấu hiệu sử dụng quá mức. Bao gồm hóa đơn mua hàng và gói gửi ban đầu.</li>" +
        "<li><strong>Phương Thức Hoàn Trả:</strong> Chúng tôi cung cấp các phương thức hoàn trả như hoàn tiền, trao đổi sản phẩm, hoặc phiếu quà tặng theo mong muốn của khách hàng.</li>" +
        "<li><strong>Phí Hoàn Trả:</strong> Hoàn trả miễn phí sẽ được áp dụng nếu có vấn đề về chất lượng sản phẩm hoặc nếu sản phẩm bị hỏng do lỗi của chúng tôi. Trong trường hợp khác, có thể áp dụng một khoản phí hoàn trả [nếu có].</li>" +
        "<li><strong>Xử Lý Hoàn Trả:</strong> Chúng tôi cam kết xử lý yêu cầu hoàn trả trong vòng [số ngày] ngày làm việc kể từ khi nhận được sản phẩm hoàn trả.</li>" +
        "<li><strong>Chính Sách Đặc Biệt:</strong> [Nếu có] Các sản phẩm [tên sản phẩm] không hỗ trợ hoàn trả trừ khi có vấn đề về chất lượng.</li>" +
        "<li><strong>Liên Hệ:</strong> Để yêu cầu hoặc biết thêm thông tin về quy trình hoàn trả, vui lòng liên hệ với bộ phận chăm sóc khách hàng của chúng tôi qua [địa chỉ email] hoặc số điện thoại [số điện thoại].</li>" +
        "</ol>" +
        "<p><strong>Lưu ý:</strong> Chúng tôi có quyền điều chỉnh chính sách này mà không cần thông báo trước. Các thay đổi sẽ có hiệu lực ngay khi được đăng tải trên trang web của chúng tôi.</p>";

      // Sử dụng innerHTML để thêm chuỗi đã được format vào một phần tử HTML
      textContainer.innerHTML = refundPolicyText;
      break;
    case "KHI NÀO TÔI SẼ ĐƯỢC HOÀN TIỀN?":
      var refundPolicyText =
        "<p><strong>Thời điểm cụ thể khi bạn được hoàn tiền có thể thay đổi tùy thuộc vào chính sách cụ thể của trang web hoặc cửa hàng bạn đang mua hàng. Dưới đây là một số trường hợp phổ biến khi bạn có thể được hoàn tiền:</strong></p>" +
        "<ol>" +
        "<li><strong>Sản phẩm không đáp ứng mong đợi hoặc có vấn đề chất lượng:</strong><br>" +
        "Trong trường hợp này, bạn thường có quyền yêu cầu hoàn tiền ngay sau khi nhận sản phẩm và xác nhận vấn đề.</li>" +
        "<li><strong>Hủy đơn hàng trước khi giao hàng:</strong><br>" +
        "Nếu bạn hủy đơn hàng trước khi sản phẩm được giao, thì thường bạn sẽ được hoàn tiền ngay sau khi yêu cầu hủy đơn hàng được chấp nhận.</li>" +
        "<li><strong>Hoàn trả sản phẩm đã mua:</strong><br>" +
        "Sau khi bạn trả lại sản phẩm và nhóm chăm sóc khách hàng xác nhận rằng nó đáp ứng điều kiện hoàn trả, bạn thường sẽ được hoàn tiền. Thời gian xử lý có thể kéo dài từ vài ngày đến vài tuần tùy thuộc vào chính sách cụ thể của cửa hàng.</li>" +
        "<li><strong>Hủy đơn hàng sau khi giao hàng:</strong><br>" +
        "Trong trường hợp hủy đơn hàng sau khi sản phẩm đã được giao, thì thời gian hoàn tiền có thể mất một khoảng thời gian ngắn sau khi cửa hàng nhận được sản phẩm trả lại.</li>" +
        "<li><strong>Thời gian xử lý thanh toán:</strong><br>" +
        "Nếu bạn thanh toán bằng thẻ tín dụng hoặc các phương thức thanh toán trực tuyến khác, thời gian hoàn tiền có thể phụ thuộc vào thời gian xử lý của nhà cung cấp dịch vụ thanh toán.</li>" +
        "</ol>" +
        "<p><strong>Lưu ý rằng mỗi cửa hàng có chính sách riêng về hoàn tiền, vì vậy bạn nên kiểm tra và đọc kỹ chính sách của cửa hàng hoặc trang web mua sắm cụ thể mà bạn đang giao dịch để biết thông tin chi tiết và chính xác nhất.</strong></p>";

      // Sử dụng innerHTML để thêm chuỗi đã được format vào một phần tử HTML
      textContainer.innerHTML = refundPolicyText;
      break;
    case "TẠI SAO ĐƠN HÀNG TRỰC TUYẾN CỦA TÔI BỊ HỦY?":
      var cancelReasonText =
        "<strong>Lý do một đơn hàng trực tuyến bị hủy có thể đến từ nhiều nguyên nhân khác nhau, tùy thuộc vào chính sách và điều kiện của cửa hàng hoặc nhà cung cấp cụ thể. Dưới đây là một số lý do phổ biến:</strong><br><br>" +
        "<ol>" +
        "<li><strong>Không Còn Hàng:</strong><br>" +
        "Có thể xảy ra tình trạng hết hàng, và do đó, đơn hàng của bạn sẽ bị hủy tự động.</li>" +
        "<li><strong>Thông Tin Thanh Toán Không Hợp Lệ:</strong><br>" +
        "Nếu thông tin thanh toán của bạn không chính xác hoặc thẻ tín dụng không đủ hạn mức, đơn hàng có thể bị hủy.</li>" +
        "<li><strong>Lỗi Kỹ Thuật hoặc Hệ Thống:</strong><br>" +
        "Có thể có lỗi kỹ thuật hoặc vấn đề về hệ thống từ phía cửa hàng hoặc nhà cung cấp, dẫn đến việc hủy đơn hàng.</li>" +
        "<li><strong>Nghi Ngờ Giao Dịch Gian Lận:</strong><br>" +
        "Các hệ thống an ninh có thể phát hiện ra giao dịch nghi ngờ gian lận và hủy đơn hàng để bảo vệ người mua và người bán.</li>" +
        "<li><strong>Không Thể Liên Hệ Với Người Mua:</strong><br>" +
        "Nếu cửa hàng không thể liên hệ được với bạn để xác nhận đơn hàng hoặc thông tin giao hàng, họ có thể quyết định hủy đơn hàng.</li>" +
        "<li><strong>Yêu Cầu Hủy Bởi Người Mua:</strong><br>" +
        "Bạn hoặc người mua có thể yêu cầu hủy đơn hàng trước khi nó được xử lý hoặc giao hàng.</li>" +
        "<li><strong>Không Đáp Ứng Được Yêu Cầu Thanh Toán:</strong><br>" +
        "Nếu thanh toán không được xử lý thành công, đơn hàng có thể bị hủy.</li>" +
        "</ol>" +
        "<p><strong>Đối với mỗi cửa hàng hoặc nhà cung cấp, chính sách hủy đơn hàng có thể được mô tả trong điều khoản và điều kiện của họ. Nếu bạn gặp vấn đề với đơn hàng của mình, nên liên hệ trực tiếp với dịch vụ khách hàng của cửa hàng để biết thêm chi tiết và hỗ trợ.</strong></p>";

      // Sử dụng innerHTML để thêm chuỗi đã được format vào một phần tử HTML
      textContainer.innerHTML = cancelReasonText;
      break;
    case "TÔI CÓ THỂ THAY ĐỔI ĐỊA CHỈ GIAO HÀNG HOẶC THAY ĐƠN HÀNG NẾU CHƯA ĐƯỢC GIAO HÀNG KHÔNG?":
      var changeOrderText =
        "<strong>Khả năng thay đổi địa chỉ giao hàng hoặc thay đổi đơn hàng trước khi nó được giao có thể phụ thuộc vào chính sách cụ thể của cửa hàng hoặc nhà cung cấp mà bạn đã đặt hàng. Dưới đây là một số lưu ý chung:</strong><br><br>" +
        "<ol>" +
        "<li><strong>Thời Gian Chấp Nhận Thay Đổi:</strong><br>" +
        "Một số cửa hàng có thể cho phép thay đổi địa chỉ giao hàng hoặc đơn hàng trong khoảng thời gian ngắn sau khi bạn đặt hàng, trước khi đơn hàng được xử lý.</li>" +
        "<li><strong>Liên Hệ Với Dịch Vụ Khách Hàng:</strong><br>" +
        "Liên hệ với dịch vụ khách hàng của cửa hàng hoặc nhà cung cấp càng sớm càng tốt để biết liệu họ có thể thực hiện thay đổi cho bạn hay không. Thông tin liên hệ thường có sẵn trên trang web của họ hoặc trong xác nhận đơn hàng.</li>" +
        "<li><strong>Chính Sách Hủy và Thay Đổi:</strong><br>" +
        "Đọc kỹ chính sách hủy và thay đổi của cửa hàng. Một số cửa hàng có chính sách linh hoạt, trong khi những cửa hàng khác có thể áp đặt hạn chế về việc thay đổi đơn hàng.</li>" +
        "<li><strong>Quy Trình Thay Đổi Trực Tuyến:</strong><br>" +
        "Một số cửa hàng cung cấp quy trình thay đổi trực tuyến, trong đó bạn có thể đăng nhập vào tài khoản của mình và thực hiện các thay đổi mà không cần liên hệ trực tiếp với dịch vụ khách hàng.</li>" +
        "<li><strong>Đặt Liệu Có Thể Thực Hiện Thay Đổi:</strong><br>" +
        "Nếu đơn hàng của bạn đã ở trong quá trình xử lý hoặc giao hàng, có thể đã quá muộn để thay đổi. Tuy nhiên, vẫn nên thử liên hệ với dịch vụ khách hàng để biết liệu họ có thể hỗ trợ bạn hay không.</li>" +
        "</ol>" +
        "<p><strong>Lưu ý:</strong> Mỗi cửa hàng có thể có quy định khác nhau, và thông tin chi tiết nhất sẽ nằm trong chính sách và điều kiện của cửa hàng đó. Nếu bạn gặp khó khăn hoặc có thắc mắc, việc liên hệ trực tiếp với dịch vụ khách hàng sẽ là cách hiệu quả nhất để giải quyết vấn đề của bạn.</p>";

      // Sử dụng innerHTML để thêm chuỗi đã được format vào một phần tử HTML
      textContainer.innerHTML = changeOrderText;
      break;
    case "LÀM THẾ NÀO ĐỂ TÔI THEO DÕI ĐƠN HÀNG HOẶC TÌNH TRẠNG GIAO HÀNG CỦA TÔI?":
      var trackingGuide =
        "<p><strong>Để theo dõi đơn hàng hoặc tình trạng giao hàng của bạn, bạn có thể thực hiện các bước sau:</strong></p>" +
        "<ol>" +
        "<li><strong>Kiểm Tra Email Xác Nhận Đơn Hàng:</strong><br>" +
        "Khi bạn đặt hàng thành công, thường bạn sẽ nhận được một email xác nhận đơn hàng từ cửa hàng hoặc nhà cung cấp. Trong email này, có thể có thông tin về cách theo dõi đơn hàng và liên kết trực tiếp đến trang tình trạng đơn hàng.</li>" +
        "<li><strong>Truy Cập Tài Khoản Trên Trang Web:</strong><br>" +
        "Nếu bạn đã tạo tài khoản trên trang web của cửa hàng, đăng nhập vào tài khoản của bạn. Trong phần đơn hàng hoặc lịch sử mua hàng, bạn thường sẽ thấy tình trạng cụ thể của đơn hàng và thông tin vận chuyển.</li>" +
        "<li><strong>Sử Dụng Mã Theo Dõi (Tracking Number):</strong><br>" +
        "Nếu có mã theo dõi (tracking number) được cung cấp, bạn có thể sử dụng nó để theo dõi giao hàng qua dịch vụ vận chuyển. Trong email xác nhận đơn hàng hoặc trên trang web của cửa hàng, bạn thường sẽ tìm thấy mã theo dõi.</li>" +
        "<li><strong>Liên Hệ Dịch Vụ Khách Hàng:</strong><br>" +
        "Nếu bạn không thấy thông tin tình trạng đơn hàng trên trang web hoặc gặp vấn đề với mã theo dõi, liên hệ với dịch vụ khách hàng của cửa hàng. Họ có thể cung cấp thông tin chi tiết và hỗ trợ bạn theo dõi đơn hàng.</li>" +
        "<li><strong>Sử Dụng Ứng Dụng Di Động (Nếu Có):</strong><br>" +
        "Nếu cửa hàng có ứng dụng di động, bạn có thể tải và sử dụng nó để theo dõi đơn hàng và nhận thông báo về tình trạng giao hàng.</li>" +
        "<li><strong>Kiểm Tra Trực Tiếp Trên Trang Web Dịch Vụ Vận Chuyển:</strong><br>" +
        "Nếu bạn biết dịch vụ vận chuyển (ví dụ: FedEx, UPS, DHL), bạn có thể truy cập trang web của họ và sử dụng mã theo dõi để kiểm tra tình trạng giao hàng.</li>" +
        "</ol>" +
        "<p><strong>Nhớ rằng các bước này có thể thay đổi tùy thuộc vào cửa hàng cụ thể và dịch vụ vận chuyển được sử dụng. Nếu bạn gặp khó khăn, việc liên hệ trực tiếp với dịch vụ khách hàng của cửa hàng là cách tốt nhất để nhận được hỗ trợ.</strong></p>";

      // Sử dụng innerHTML để thêm chuỗi đã được format vào một phần tử HTML
      textContainer.innerHTML = trackingGuide;
      break;
    case "TẠI SAO PHIẾU GIẢM GIÁ CỦA TÔI KHÔNG SỬ DỤNG ĐƯỢC?":
      // Thực hiện hành động cho Mục 3
      var errorMessage =
        "<p><strong>Có một số lý do khiến phiếu giảm giá của bạn không sử dụng được. Dưới đây là một số nguyên nhân phổ biến:</strong></p>" +
        "<ol>" +
        "<li><strong>Thời Hạn Phiếu:</strong><br>Phiếu giảm giá thường có thời hạn sử dụng. Đảm bảo rằng bạn sử dụng phiếu giảm giá trong khoảng thời gian hiệu lực của nó. Kiểm tra xem phiếu có ngày hết hạn không.</li>" +
        "<li><strong>Điều Kiện Sử Dụng:</strong><br>Một số phiếu giảm giá có điều kiện sử dụng cụ thể, như số lượng tối thiểu, giá trị tối thiểu, hoặc chỉ áp dụng cho các sản phẩm hoặc danh mục cụ thể. Kiểm tra xem bạn đã đáp ứng đủ điều kiện chưa.</li>" +
        "<li><strong>Phiếu Chỉ Sử Dụng Một Lần:</strong><br>Một số phiếu giảm giá chỉ có thể sử dụng một lần duy nhất. Nếu bạn đã sử dụng phiếu trước đó, bạn sẽ không thể sử dụng lại nó.</li>" +
        "<li><strong>Sai Mã Phiếu:</strong><br>Kiểm tra xem bạn đã nhập đúng mã phiếu giảm giá chưa. Thường thì mã sẽ cả chữ và số, và nên được nhập chính xác.</li>" +
        "<li><strong>Không Áp Dụng Đối Với Sản Phẩm Đã Giảm Giá Hoặc Khuyến Mãi Khác:</strong><br>Một số phiếu giảm giá không áp dụng cho sản phẩm đã giảm giá hoặc đã tham gia khuyến mãi khác. Đọc kỹ điều kiện sử dụng của phiếu.</li>" +
        "<li><strong>Hạn Chế Về Quốc Gia:</strong><br>Một số phiếu giảm giá có hạn chế về quốc gia. Kiểm tra xem phiếu của bạn có áp dụng trong quốc gia của bạn không.</li>" +
        "<li><strong>Lỗi Hệ Thống hoặc Kỹ Thuật:</strong><br>Có thể có lỗi hệ thống hoặc kỹ thuật đang xảy ra. Trong trường hợp này, liên hệ với dịch vụ khách hàng của cửa hàng để được hỗ trợ.</li>" +
        "<li><strong>Chính Sách của Cửa Hàng:</strong><br>Mỗi cửa hàng có thể có chính sách riêng về việc sử dụng phiếu giảm giá. Đọc kỹ chính sách của cửa hàng để hiểu rõ hơn về các quy tắc và điều kiện.</li>" +
        "</ol>" +
        "<p><strong>Nếu sau khi kiểm tra tất cả các điều trên mà vẫn gặp vấn đề, việc liên hệ trực tiếp với dịch vụ khách hàng của cửa hàng là bước quan trọng để giải quyết tình huống và đảm bảo bạn có thể sử dụng phiếu giảm giá một cách hiệu quả.</strong></p>";

      // Sử dụng innerHTML để thêm chuỗi đã được format vào một phần tử HTML
      textContainer.innerHTML = errorMessage;
      break;
    case "ĐIỀU GÌ XẢY RA VỚI PHIẾU GIẢM GIÁ CỦA TÔI NẾU TÔI TRẢ LẠI HÀNG HOẶC NẾU (MỘT PHẦN) ĐƠN HÀNG CỦA TÔI BỊ HỦY?":
      var discountPolicyText =
        "<p><strong>Điều gì xảy ra với phiếu giảm giá của bạn nếu bạn trả lại hàng hoặc nếu (một phần) đơn hàng của bạn bị hủy có thể phụ thuộc vào chính sách cụ thể của cửa hàng hoặc nhà cung cấp. Dưới đây là một số kịch bản phổ biến:</strong></p>" +
        "<ol>" +
        "<li><strong>Hoàn Trả Phiếu Giảm Giá:</strong><br>" +
        "Một số cửa hàng có thể quyết định hoàn trả giá trị của phiếu giảm giá cho bạn nếu bạn trả lại toàn bộ đơn hàng hoặc sản phẩm và đáp ứng các điều kiện của chính sách hoàn trả của họ.</li>" +
        "<li><strong>Phiếu Giảm Giá Vẫn Còn Hiệu Lực:</strong><br>" +
        "Nếu bạn chỉ trả lại một phần của đơn hàng hoặc sản phẩm, một số cửa hàng có thể quyết định giữ nguyên giá trị của phiếu giảm giá với điều kiện rằng bạn vẫn đáp ứng các điều kiện sử dụng của phiếu.</li>" +
        "<li><strong>Phiếu Giảm Giá Hết Hiệu Lực:</strong><br>" +
        "Có cửa hàng có thể hủy bỏ hoặc làm cho phiếu giảm giá không còn hiệu lực nếu bạn trả lại hàng hoặc hủy bỏ đơn hàng. Điều này có thể phụ thuộc vào chính sách cụ thể của cửa hàng và lý do bạn trả hàng.</li>" +
        "<li><strong>Chính Sách Riêng Cho Mỗi Cửa Hàng:</strong><br>" +
        "Mỗi cửa hàng có thể có chính sách riêng về việc xử lý phiếu giảm giá trong trường hợp trả hàng hoặc hủy đơn. Đọc kỹ chính sách hoàn trả và sử dụng của cửa hàng để biết thông tin chi tiết.</li>" +
        "<li><strong>Ghi Chú Trong Email Hoặc Liên Hệ Khách Hàng:</strong><br>" +
        "Trong một số trường hợp, cửa hàng có thể ghi chú về việc xử lý phiếu giảm giá trong các thông báo email hoặc trong quá trình liên hệ với bạn về trạng thái đơn hàng.</li>" +
        "</ol>";

      // Sử dụng innerHTML để thêm chuỗi đã được format vào một phần tử HTML
      textContainer.innerHTML = discountPolicyText;
      break;
    case "ĐIỀU GÌ XẢY RA NẾU TÔI KHÔNG THỂ TÌM THẤY (CÁC) SẢN PHẨM TÔI ĐANG TÌM KIẾM?":
      var searchIssueText =
        "<strong>Nếu bạn không thể tìm thấy sản phẩm hoặc các sản phẩm bạn đang tìm kiếm trên trang web mua sắm, có một số lý do mà bạn có thể gặp phải:</strong><br><br>" +
        "<ol>" +
        "<li><strong>Sản Phẩm Đã Hết Hàng:</strong><br>" +
        "Một lý do phổ biến là sản phẩm bạn đang tìm kiếm đã hết hàng hoặc không còn sẵn có tại thời điểm đó. Bạn có thể kiểm tra lại sau hoặc liên hệ với dịch vụ khách hàng để biết thêm thông tin về việc tái tồn kho.</li>" +
        "<li><strong>Sản Phẩm Không Còn Trong Khoản Giá Bạn Chọn:</strong><br>" +
        "Nếu bạn đang tìm kiếm theo khoản giá cụ thể và không tìm thấy sản phẩm, có thể nó không thuộc khoảng giá bạn đã chọn. Hãy kiểm tra lại các bộ lọc giá để chắc chắn.</li>" +
        "<li><strong>Tìm Kiếm Không Chính Xác:</strong><br>" +
        "Kiểm tra xem bạn đã nhập từ khóa tìm kiếm chính xác chưa. Sử dụng các từ khóa mô tả chi tiết về sản phẩm mà bạn đang tìm kiếm.</li>" +
        "<li><strong>Lỗi Kỹ Thuật hoặc Hệ Thống:</strong><br>" +
        "Có thể có lỗi kỹ thuật hoặc vấn đề về hệ thống từ phía trang web. Nếu bạn gặp khó khăn, hãy thử tải lại trang hoặc liên hệ với dịch vụ khách hàng.</li>" +
        "<li><strong>Sản Phẩm Không Còn Được Bán Trên Trang Web:</strong><br>" +
        "Có trường hợp nơi bán sản phẩm đã ngừng kinh doanh hoặc ngừng cung cấp sản phẩm đó. Bạn có thể kiểm tra trên trang chủ của cửa hàng để biết thông tin cập nhật.</li>" +
        "<li><strong>Lựa Chọn Bộ Lọc:</strong><br>" +
        "Nếu bạn đang sử dụng các bộ lọc, hãy chắc chắn rằng chúng được thiết lập chính xác và không làm cho sản phẩm bạn đang tìm kiếm bị loại bỏ.</li>" +
        "</ol>" +
        "<p>Nếu sau khi kiểm tra các điều trên mà vẫn gặp vấn đề, hãy liên hệ với dịch vụ khách hàng của trang web để họ có thể hỗ trợ bạn trong việc tìm kiếm sản phẩm hoặc cung cấp thông tin chi tiết hơn.</p>";

      // Sử dụng innerHTML để thêm chuỗi đã được format vào một phần tử HTML
      textContainer.innerHTML = searchIssueText;

      break;
    case "TÔI PHẢI LÀM GÌ NẾU CÂU HỎI CỦA TÔI KHÔNG ĐƯỢC ĐỀ CẬP Ở ĐÂY?":
      // Chuỗi cần format
      var formattedString = `
  <strong>Nếu câu hỏi của bạn không được đề cập ở đây hoặc nếu bạn có câu hỏi cụ thể hơn, có một số cách bạn có thể thực hiện:</strong>
  <br><br>
  <ol>
    <li><strong>Dùng Cụm Từ Khóa Rõ Ràng:</strong> Sử dụng cụm từ khóa rõ ràng và chính xác nhất có thể khi đặt câu hỏi. Điều này giúp tăng cơ hội nhận được câu trả lời chính xác.</li>
    <li><strong>Chia Nhỏ Câu Hỏi:</strong> Nếu câu hỏi của bạn quá rộng lớn, hãy cố gắng chia nhỏ thành các phần nhỏ hơn và đặt từng phần một. Điều này giúp tăng khả năng hiểu rõ và đáp ứng từ người trả lời.</li>
    <li><strong>Liên Hệ Trực Tiếp Dịch Vụ Hỗ Trợ:</strong> Nếu câu hỏi của bạn liên quan đến một dịch vụ cụ thể, sản phẩm hoặc tổ chức, hãy xem liệu họ có trang hỗ trợ trực tuyến, diễn đàn hoặc thông tin liên hệ không. Việc liên hệ trực tiếp với họ có thể mang lại câu trả lời chính xác nhất.</li>
    <li><strong>Dùng Các Nguồn Thông Tin Khác:</strong> Tìm kiếm câu trả lời từ các nguồn thông tin khác nhau, bao gồm cả tài liệu, diễn đàn, trang web chính thức của sản phẩm hoặc dịch vụ. Có thể có thông tin chi tiết đã được xuất bản trước đó.</li>
    <li><strong>Thử Lại Sau:</strong> Nếu bạn không nhận được câu trả lời trong lần đầu, hãy thử lại sau một thời gian. Cộng đồng trực tuyến có thể không trả lời ngay lập tức, nhưng có thể có người sẽ đọc và trả lời câu hỏi của bạn sau đó.</li>
    <li><strong>Tham Gia Cộng Đồng Trực Tuyến:</strong> Nếu câu hỏi của bạn liên quan đến một lĩnh vực cụ thể, tham gia vào các cộng đồng trực tuyến, diễn đàn hoặc nhóm chuyên ngành có thể giúp bạn tìm kiếm câu trả lời và chia sẻ kinh nghiệm với người khác.</li>
  </ol>
`;

      // Sử dụng innerHTML để thêm chuỗi đã được format vào một phần tử HTML
      textContainer.innerHTML = formattedString;

      break;
  }
}
