using System;
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
        [Required]
        public string gender { get; set; }
        [Required]
        public string KnownAs { get; set; }
        [Required]
        public DateTime DateOfBirth { get; set; }
        [Required]
        public string City { get; set; }
        [Required]
        public string Country { get; set; }
        public DateTime Created { get; set; }
        public DateTime LastActive { get; set; }


        public UserForRegisterDto()
        {
            Created = DateTime.Now;
            LastActive = DateTime.Now;
        }
    }
}