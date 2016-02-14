$(document).ready(function() {
	$(".check").change(function() {
		$(".check").each(function() {
			if ($(this).prop("checked") == false)
				$(this).prop("disabled",true);
		});
		if ($(".check:disabled").length == $(".check").length)
			$(".check").prop("disabled",false);
	});
});