
const form = document.getElementById("ContactForm") as HTMLFormElement | null;
const responseMessage = document.getElementById("responseMessage") as HTMLElement | null;

if(form && responseMessage) {
    form.addEventListener("submit", async (e: SubmitEvent) => {
        e.preventDefault();

        const formData = new FormData(form);

        try{
            const res = await fetch("/api/contact", {
                method: "POST",
                body: formData,
            });

            const data: { message ?: string} = await res.json();

            if(res.ok){
                responseMessage.textContent = data.message ?? "Your message was sent successfully!";
                responseMessage.style.color = "green";
                form.reset();
            } else {
                responseMessage.textContent = data.message ?? "Something went wrong.";
                responseMessage.style.color = "red";
            }

        } catch(error){
            responseMessage.textContent = "Network error. Please try again.";
            responseMessage.style.color = "red";
        }
    });
}
