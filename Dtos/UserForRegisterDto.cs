using System.ComponentModel.DataAnnotations;

namespace DatingAppV2.Dtos
{
    public class UserForRegisterDto
    {
        [Required]
        public string Username { get; set; }
        [Required]
        [StringLength(12, MinimumLength = 4, 
        ErrorMessage = "You must supply a password with a minimun length of 4 characters")]
        public string Password { get; set; }
    }
}