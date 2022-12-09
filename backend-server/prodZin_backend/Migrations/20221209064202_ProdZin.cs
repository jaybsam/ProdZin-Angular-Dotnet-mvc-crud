using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace prodZinbackend.Migrations
{
    /// <inheritdoc />
    public partial class ProdZin : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Person",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    firstName = table.Column<string>(type: "nvarchar(30)", maxLength: 30, nullable: false),
                    lastName = table.Column<string>(type: "nvarchar(30)", maxLength: 30, nullable: false),
                    displayName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    email = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    personNotes = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: true),
                    primaryAddress = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    secondaryAddress = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: true),
                    jobTitle = table.Column<string>(type: "nvarchar(15)", maxLength: 15, nullable: true),
                    jobDescription = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: true),
                    Country = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    City = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    State = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Zip = table.Column<int>(type: "int", nullable: false),
                    isFavorite = table.Column<bool>(type: "bit", nullable: false),
                    avatar = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    phone = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    date = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Person", x => x.Id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Person");
        }
    }
}
