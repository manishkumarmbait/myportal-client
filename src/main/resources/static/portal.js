GET: $(document).ready(
	function() {
		//GET REQUEST
		$("#accessporal").click(function(event) {
			event.preventDefault();
			ajaxGet();
		});
		//DO GET
		function ajaxGet() {
			
			var jsonData = {
	"listOfAccount" : [
		{
			"listOfAccountDtls" : [
				{
                        	"od" : "1500",
	                        "loanType" : "08",
	                        "ownership" : "1"
                    },
                    {
                        	"od" : "1600",
	                        "loanType" : "53",
	                        "ownership" : "3"
                    },
                                        {
                        	"od" : "1500",
	                        "loanType" : "57",
	                        "ownership" : "4"
                    },
                    {
                        	"od" : "1600",
	                        "loanType" : "60",
	                        "ownership" : "4"
                    },
                                        {
                        	"od" : "1500",
	                        "loanType" : "57",
	                        "ownership" : "3"
                    },
                    {
                        	"od" : "1600",
	                        "loanType" : "70",
	                        "ownership" : "2"
                    },
                                        {
                        	"od" : "1500",
	                        "loanType" : "90",
	                        "ownership" : "1"
                    },
                    {
                        	"od" : "1600",
	                        "loanType" : "70",
	                        "ownership" : "4"
                    },
                                        {
                        	"od" : "1500",
	                        "loanType" : "76",
	                        "ownership" : "2"
                    },
                    {
                        	"od" : "1600",
	                        "loanType" : "57",
	                        "ownership" : "4"
                    },
                                        {
                        	"od" : "1500",
	                        "loanType" : "34",
	                        "ownership" : "3"
                    },
                    {
                        	"od" : "1600",
	                        "loanType" : "55",
	                        "ownership" : "6"
                    },
                                        {
                        	"od" : "1500",
	                        "loanType" : "90",
	                        "ownership" : "5"
                    },
                    {
                        	"od" : "1600",
	                        "loanType" : "07",
	                        "ownership" : "4"
                    },
                                        {
                        	"od" : "1500",
	                        "loanType" : "09",
	                        "ownership" : "1"
                    },
                    {
                        	"od" : "1600",
	                        "loanType" : "51",
	                        "ownership" : "2"
                    },
                                        {
                        	"od" : "15000",
	                        "loanType" : "55",
	                        "ownership" : "2"
                    },
                    {
                        	"od" : "1600",
	                        "loanType" : "53",
	                        "ownership" : "2"
                    }	
			]
		},
		{
			"listOfAccountDtls" : [
				{
                        	"od" : "15000",
	                        "loanType" : "08",
	                        "ownership" : "1"
                    },
                    {
                        	"od" : "16000",
	                        "loanType" : "53",
	                        "ownership" : "3"
                    },
                                        {
                        	"od" : "15000",
	                        "loanType" : "57",
	                        "ownership" : "4"
                    },
                    {
                        	"od" : "16000",
	                        "loanType" : "60",
	                        "ownership" : "4"
                    },
                                        {
                        	"od" : "15000",
	                        "loanType" : "57",
	                        "ownership" : "3"
                    },
                    {
                        	"od" : "16000",
	                        "loanType" : "70",
	                        "ownership" : "2"
                    },
                                        {
                        	"od" : "15000",
	                        "loanType" : "90",
	                        "ownership" : "1"
                    },
                    {
                        	"od" : "16000",
	                        "loanType" : "70",
	                        "ownership" : "4"
                    },
                                        {
                        	"od" : "15000",
	                        "loanType" : "76",
	                        "ownership" : "2"
                    },
                    {
                        	"od" : "16000",
	                        "loanType" : "57",
	                        "ownership" : "4"
                    },
                                        {
                        	"od" : "15000",
	                        "loanType" : "34",
	                        "ownership" : "3"
                    },
                    {
                        	"od" : "16000",
	                        "loanType" : "55",
	                        "ownership" : "6"
                    },
                                        {
                        	"od" : "15000",
	                        "loanType" : "90",
	                        "ownership" : "5"
                    },
                    {
                        	"od" : "16000",
	                        "loanType" : "07",
	                        "ownership" : "4"
                    },
                                        {
                        	"od" : "15000",
	                        "loanType" : "09",
	                        "ownership" : "1"
                    },
                    {
                        	"od" : "16000",
	                        "loanType" : "51",
	                        "ownership" : "2"
                    },
                                        {
                        	"od" : "15000",
	                        "loanType" : "55",
	                        "ownership" : "2"
                    },
                    {
                        	"od" : "16000",
	                        "loanType" : "53",
	                        "ownership" : "2"
                    }	
			]
		}
	],
	"mit" : true
};

			$.ajax({
				type: "POST",
				url: "http://20.219.125.105:2222/ruleservice/getOD",
				//url: "http://localhost:2222/ruleservice/getOD",
				contentType: 'application/json',
				data: JSON.stringify(jsonData),
				success: function(result) {
					$("#apiResponse").html(result);
				}
			});
		}
	})