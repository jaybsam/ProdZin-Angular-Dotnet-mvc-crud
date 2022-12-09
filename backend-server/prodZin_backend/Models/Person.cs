using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace prodZin_backend.Models
{
    public class Person
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        [Required]
        [StringLength(30)]
        [Display(Name = "First name")]
        public string firstName { get; set; }
        [Required]
        [StringLength(30)]
        [Display(Name = "Last name")]
        public string lastName { get; set; }
        [Required]
        public string displayName { get; set; }
        [Required]
        [DataType(DataType.EmailAddress)]
        [EmailAddress]
        public string email { get; set; }
        [StringLength(100)]
        public string personNotes { get; set; }
        [Required]
        [StringLength(100)]
        public string primaryAddress { get; set; }
        [StringLength(100)]
        public string secondaryAddress { get; set; }
        [StringLength(15)]
        public string jobTitle { get; set; }
        [StringLength(100)]
        public string jobDescription { get; set; }
        public string Country { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public int Zip { get; set; }
        public bool isFavorite { get; set; }
        public string avatar { get; set; }
        public string phone { get; set; }
        public DateTime date { get; set; }


    }
}
